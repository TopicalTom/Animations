import React, { useRef } from 'react';
import { StyleSheet, Animated, View, useWindowDimensions, PanResponder } from 'react-native';

// Components
import SwipeCard from './SwipeCard';

const Deck = ({ data }) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const SCREEN_WIDTH = useWindowDimensions().width;
    const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
    const SWIPE_OUT_DURATION = 250;

    const onSwipeComplete = (direction) => {
        //direction === 'right' ? onSwipeRight() : onSwipeLeft();
    };

    const forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(pan, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION, 
            useNativeDriver: false
        }).start(() => { 
            onSwipeComplete(duration)
        });
    };

    const resetPosition = () => {
        Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
        }).start();
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gesture) => {
                pan.setValue({
                    x: gesture.dx,
                    y: gesture.dy
                });
            },
            onPanResponderRelease: (evt, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    forceSwipe('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    forceSwipe('left');
                } else {
                    resetPosition();
                }
            },
        })
    ).current;

    const getCardStyle = () => {
        const rotate = pan.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange:['-120deg', '0deg', '120deg']
        })

        return { 
            ...pan.getLayout(),
            transform: [{ rotate }]
        };
    }

    return (
        <>
            {data && data.map((item, index) => {
                if (index === 0) {
                    return (
                        <Animated.View 
                            {...panResponder.panHandlers}
                            style={getCardStyle()}
                            key={item.id}
                        >
                            <SwipeCard {...item} />
                        </Animated.View>
                    );
                }
                return (
                    <View 
                        key={item.id}
                    >
                        <SwipeCard {...item} />
                    </View>
                );
            })}
        </>
    );
};

const styles = StyleSheet.create({});

export default Deck;