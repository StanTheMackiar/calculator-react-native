import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import { Button } from '../components/Button';
import { styles } from '../theme/appTheme';

import { useCalculator } from '../../hooks/useCalculator';




export const CalculatorScreen = () => {

    const {
      btnAddition,
      btnDivision,
      btnMultiplication,
      btnSubtraction,
      calculate,
      clean,
      deleteCharacter,
      lastResult,
      positiveToNegative,
      putCharacter,
      result,
    } = useCalculator();

    useEffect(() => {
        SplashScreen.hide();
    }, []);

  return (
    <View style={styles.calculatorContainer}>
        <Text style={styles.smallResult}>{ lastResult > '0' ? lastResult : '' }</Text>

        <Text 
            style={styles.result}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            { result }
        </Text>

        <View style={styles.row}>
            <Button viewStyle={buttonView.lightGray} fontStyle={buttonFont.black} onPress={ clean }>C</Button>
            <Button viewStyle={buttonView.lightGray} fontStyle={buttonFont.black} onPress={ positiveToNegative }>+/-</Button>
            <Button viewStyle={buttonView.lightGray} fontStyle={buttonFont.del} onPress={ deleteCharacter }>DEL</Button>
            <Button viewStyle={buttonView.orange} fontStyle={buttonFont.white} onPress={ btnDivision }>÷</Button>
        </View>

        <View style={styles.row}>
            <Button onPress={ putCharacter }>7</Button>
            <Button onPress={ putCharacter }>8</Button>
            <Button onPress={ putCharacter }>9</Button>
            <Button onPress={ btnMultiplication } viewStyle={buttonView.orange} fontStyle={buttonFont.white}>X</Button>
        </View>

        <View style={styles.row}>
            <Button onPress={ putCharacter }>4</Button>
            <Button onPress={ putCharacter }>5</Button>
            <Button onPress={ putCharacter }>6</Button>
            <Button onPress={ btnSubtraction } viewStyle={buttonView.orange} fontStyle={buttonFont.white}>-</Button>
        </View>

        <View style={styles.row}> 
            <Button onPress={ putCharacter }>1</Button>
            <Button onPress={ putCharacter }>2</Button>
            <Button onPress={ putCharacter }>3</Button>
            <Button onPress={ btnAddition } viewStyle={buttonView.orange} fontStyle={buttonFont.white}>+</Button>
        </View>

        <View style={styles.row}>
            <Button onPress={ putCharacter } viewStyle={[buttonView.large, buttonView.darkDray]}>0</Button>
            <Button onPress={ putCharacter }>.</Button>
            <Button onPress={ calculate } viewStyle={buttonView.orange} fontStyle={buttonFont.white}>=</Button>
        </View>

    </View>
  )
}


const buttonView = StyleSheet.create({
    lightGray: {
        backgroundColor: '#9B9B9B',
    },
    darkDray: {
        backgroundColor: '#2D2D2D',
    },
    orange: {
        backgroundColor: '#FF9427',
    },
    large: {
        width: 160,
    }
})

const buttonFont = StyleSheet.create({
    white: {
        color: 'white',
        fontWeight: 'bold',
    },
    black: {
        color: 'black',
    },
    del: {
        color: 'black',
        fontSize: 25,
    },
})