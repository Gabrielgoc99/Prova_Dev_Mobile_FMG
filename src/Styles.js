import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12, 
    width: '100%', 
    margin: 0,  
  },
  itensContainer: {
    flexDirection: 'columns',
    padding: 12,
  },
  paragraph: {
    margin: 10,
    marginBottom: 0,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'red',
  },
  imagem: {
    height: 240,
    width: 120,
    alignSelf: 'center',
    borderColor: 'black'
  },
  botao: {
    width: 200,  
    alignSelf: 'center',
    padding: 10,
   }
});