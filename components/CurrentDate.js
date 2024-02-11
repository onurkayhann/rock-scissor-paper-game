import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrentDate = () => {
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://192.168.1.243:3000/currentdate')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! Status: ${response.status}`
                        );
                    }
                    return response.text();
                })
                .then((data) => {
                    setCurrentTime(data);
                })
                .catch((error) => console.error('Error fetching data:', error));
        };

        // Fetch data initially
        fetchData();

        // Update every second
        const intervalId = setInterval(fetchData, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
        
    }, []);

    return (
        <View>
            <Text style={styles.currentDateText}>
                {currentTime ? `Date: ${currentTime}` : 'Loading...'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    currentDateText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CurrentDate;
