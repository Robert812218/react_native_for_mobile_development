import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;


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

const FlexExample = () => {
    return (
        <View style={styles.columnBox}>
            <View style={styles.box} >
                <Text>Flex item 1</Text>
            </View>
            <View style={styles.box} >
                <Text> Flex item 2 </Text>
            </View>
            <View style={styles.box}>
                <Text>Flex item 3</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 100
            }}>
              <View style={{ width: 50, height: 30, backgroundColor: 'red' }} />
              <View style={{ width: 50, height: 60, backgroundColor: 'blue' }} />
              <View style={{ width: 50, height: 40, backgroundColor: 'green' }} />
            </View>
            // Stretching items to fill height in column layout
            <View style={{
              flexDirection: 'column',
              alignItems: 'stretch',
              height: 200
            }}>
              <View style={{ height: 50, backgroundColor: 'red' }} />
              <View style={{ height: 50, backgroundColor: 'blue' }} />
            </View>
        </View>

    )
}


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.screen}>
           <MyButton isPrimary />
            <FlexExample />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fullWidthImage: {
        width: screenWidth,
        height: screenWidth * 0.5,
    },
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
    },
    columnBox: {
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: 'lightblue',
    },
})

