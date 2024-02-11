import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Hero from './components/Hero';
import TheGame from './components/TheGame';
import CurrentDate from './components/CurrentDate';

const App = () => {
    return (
        <View style={styles.container}>
            <View>
                <Header />
            </View>
            <View>
                <Hero />
            </View>
            <Text style={styles.text}>Let's play a game stranger</Text>
            <View style={styles.gameContainer}>
                <TheGame />
            </View>
            <View style={styles.currentDate}>
                <CurrentDate />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2962ff',
    },

    gameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 5,
    },

    currentDate: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
