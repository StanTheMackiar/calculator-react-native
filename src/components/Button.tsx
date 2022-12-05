import React, { FC, PropsWithChildren } from 'react'
import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    viewStyle?: StyleProp<ViewStyle>;
    fontStyle?: StyleProp<TextStyle>;
    onPress: ( character: string ) => void;
}

const defaultViewStyle: StyleProp<ViewStyle> = {
    backgroundColor: '#2D2D2D',
}

const defaultFontStyle: StyleProp<TextStyle> = {
    color: 'white',
}

export const Button:FC<PropsWithChildren<Props>> = ({ children, viewStyle = defaultViewStyle, fontStyle = defaultFontStyle, onPress }) => {

  return (
    <TouchableOpacity
      activeOpacity={ 0.5 }
      onPress={ () => onPress( `${children}` ) }
    >
    <View style={[ styles.button, viewStyle ]}>
        <Text style={[ styles.textButton, fontStyle ]}>
          { children }
        </Text>    
    </View>
    </TouchableOpacity>
  )
}


