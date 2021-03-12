import React from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';

// Components
import SwipeCard from './SwipeCard';

const Deck = ({ data }) => {
    return (
        <>
            {data && data.map(item => {
                return <SwipeCard key={item.id} {...item} />
            })}
        </>
    );
};

const styles = StyleSheet.create({});

export default Deck;