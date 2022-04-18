import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { BalaoDaSorte } from './src/components/BalaoDaSorte';
import styles from './src/Styles';


export default function App(props) {
  return (
    <View style={styles.container}>

      <BalaoDaSorte/> 
            
    </View>
  );
}
