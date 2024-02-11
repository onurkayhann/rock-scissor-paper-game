import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const choices = ['rock', 'paper', 'scissors'];

// useState values
const TheGame = () => {
    const [playerChoice, setPlayerChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');
    const [result, setResult] = useState('');
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    useEffect(() => {
        if (playerScore === 5 || computerScore === 5) {
            // Game ends when someone reaches 5
            setResult(
                playerScore === 5
                    ? 'You win the game, congratulations!'
                    : 'Computer wins the game!'
            );

            // Everything is resetting after 3 seconds
            const resetTimeout = setTimeout(() => {
                setPlayerScore(0);
                setComputerScore(0);
                setResult('');
                setPlayerChoice('');
                setComputerChoice('');
            }, 3000);

            // Cleanup the timeout to avoid memory leaks
            return () => clearTimeout(resetTimeout);
        }
    }, [playerScore, computerScore]);

    // Computer gets randomly rock, scissor or paper
    const computerRandom = () => {
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    };

    // the logic to determine the winner for each set
    const theWinner = (user, computer) => {
        if (user === computer) return "It's a tie";
        if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            setPlayerScore(playerScore + 1);
            return 'You win!';
        } else {
            setComputerScore(computerScore + 1);
            return 'Computer wins!';
        }
    };

    // the logic for the game using values from theWinner
    const startGame = (choice) => {
        const computer = computerRandom();
        setPlayerChoice(choice);
        setComputerChoice(computer);
        const outcome = theWinner(choice, computer);
        setResult(outcome);
    };

    return (
        <View>
            <Text style={styles.scoreText}>
                <Text style={{ color: '#6F1E51' }}>Live:</Text> You{' '}
                {playerScore} - {computerScore} Computer
            </Text>
            <Text style={styles.resultText}>
                You picked: {playerChoice.toUpperCase()}
            </Text>
            <Text style={styles.resultText}>
                Computer picked: {computerChoice.toUpperCase()}
            </Text>
            <Text style={styles.resultText}>{result}</Text>
            <View style={styles.buttonContainer}>
                {choices.map((choice) => (
                    <TouchableOpacity
                        disabled={playerScore === 5 || computerScore === 5}
                        key={choice}
                        style={
                            playerScore === 5 || computerScore === 5
                                ? styles.buttonDisabled
                                : styles.button
                        }
                        onPress={() => startGame(choice)}
                    >
                        <Text
                            style={
                                playerScore === 5 || computerScore === 5
                                    ? styles.buttonTextDisabled
                                    : styles.buttonText
                            }
                        >
                            {choice.toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    button: {
        backgroundColor: '#0049B7',
        padding: 18,
        margin: 10,
        borderRadius: 5,
    },

    buttonDisabled: {
        backgroundColor: '#6699cc',
        padding: 18,
        margin: 10,
        borderRadius: 5,
    },

    buttonText: {
        color: '#FFF685',
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonTextDisabled: {
        color: '#dfc02d',
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.5,
    },

    scoreText: {
        color: '#002966',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10,
    },

    resultText: {
        margin: 5,
        color: '#1e272e',
        fontSize: 18,
        fontStyle: 'italic',
    },

    choices: {
        color: '#0049B7',
        fontSize: 17,
        fontStyle: 'italic',
    },
});

export default TheGame;
