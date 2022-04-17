import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Balao } from './src/components/Balao';
import styles from './src/Styles';


export default function App(props) {
  return (
    <View style={styles.container}>

      <Balao/> 
            
    </View>
  );
}
