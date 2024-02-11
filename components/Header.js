import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// the header
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>
                Welcome to Rock, Scissor, Paper Game
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 45,
        backgroundColor: '#002966',
    },

    text: {
        textAlign: 'center',
        color: '#FFF685',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
