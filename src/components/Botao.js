import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styles from '../Styles';
import Colors from '../colors'


export const Botao = (props) => {

  return(
    <View style= {styles.botao}>
      <Button
        title={props.label}
        color={props.cor}        
        onPress={props.onpress}
      /> 
    </View>   
  );
}
export default Botao;
