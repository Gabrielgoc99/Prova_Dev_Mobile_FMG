import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { sizes } from './sizes';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.small, 
    width: '100%', 
    margin: 0,  
  },
  itensContainer: {
    flexDirection: 'columns',
    padding: 12,
  },
  paragraph: {
    margin: sizes.small,
    marginBottom: 0,
    fontSize: sizes.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'red',
  },
  imagem: {
    height: 240,
    width: 120,
    alignSelf: 'center',
      },
  botao: {
    width: 200,  
    alignSelf: 'center',
    padding: sizes.small,
    
   }
});