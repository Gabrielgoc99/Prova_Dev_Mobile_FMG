import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../Styles';
import {useState} from "react";
import Botao from './Botao'
import { colors } from '../colors'

export const BalaoDaSorte = () => {    
  
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
        label="Estourar" cor= {colors.botaoVerde} onpress= {act} style= {styles.botao}
      />
    
      <Botao
        label="Resetar" cor= {colors.botaoCinza} onpress= {clear} style= {styles.botao}
      />

    </View>
  );
}
export default BalaoDaSorte;
