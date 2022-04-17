import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../Styles';
import {useState} from "react";
import Botao from './Botao'
import Colors from '../colors'

export const Balao = () => {    
  
    const mensagens = [
        'Nutshell - Alice in Chains',
        'Obrigação - Dead Fish',
        'Buried Alive - Avenged Sevenfold',
        'Lonely Day - System of a Down',
        'Snuff - Slipknot',
        'Given Up - Linkin Park',
        'Down in a Hole - Alice in Chains',
        'Celebration Song - Unwritten Law',
        'Even Flow - Pearl Jam',
        'Simphony of Destruction - Megadeth',
        'Paranoia - A Day To Remember',
        'Master of Puppets - Metallica'
    ]; 

    const [imagem, setImagem] = useState(require('../../assets/balloon_green.jpg'))
    const [mensagem, setMensagem] = useState('')

    const act = () => {
      setImagem(require('../../assets/popped_balloon_green.jpg'))
      setMensagem (Math.floor(Math.random() * (10 + 2)))
     }

    const clear = () => {
      setImagem(require('../../assets/balloon_green.jpg'))
      setMensagem(null)
    }
 
  return (
    
    <View>
      <Image style={styles.imagem} source={imagem}/>

      <Text style ={styles.paragraph}>{mensagens[mensagem]}</Text>

      <Botao
        label="Estourar" cor= 'red' onpress= {act}
      />
      
      <Botao
        label="Resetar" cor= 'gray' onpress= {clear}
      />

    </View>
  );
}
export default Balao;
