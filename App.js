import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

// Components
import Deck from './src/components/Deck';

const DATA = [
    { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
    { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
    { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
    { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
    { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  ];

const App = () => {
    const [ showDeck, setShowDeck ] = useState(true);

    const handleEmptyState = () => {
        setShowDeck(false);
    }

    return (
        <SafeAreaView>
            {showDeck
                ?   <Deck 
                        data={DATA} 
                        callback={handleEmptyState} 
                    />
                :   <Card>
                        <Text>No more cards</Text>
                    </Card>
            }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default App;
