import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
const MyButton = ({ isPrimary }) => {
    const buttonStyles = [styles.button];
    if (isPrimary) {
        buttonStyles.push(styles.primaryButton);
    }
    return (
        <View style={[styles.button, isPrimary && styles.primaryButton]}>
            <Text>BUTTON</Text>
        </View>
    );
};

export default function HomeScreen() {
    return (
        <View>
            <MyButton isPrimary />
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    primaryButton: {
        backgroundColor: 'blue',
        borderColor: 'darkblue',
    },
    buttonText: {
        color: 'black',
    }
})