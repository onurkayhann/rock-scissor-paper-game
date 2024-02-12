import { View, StyleSheet, Image } from 'react-native';

// Hero with image
const Hero = () => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require('../assets/rock-scissor-paper.png')}
                testID='hero-image' // add a testID for testing
            />
        </View>
    );
};

// style
const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
        resizeMode: 'contain',
    },
});

export default Hero;
