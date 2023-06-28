import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ExemploUseState() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return (
    

    <View style={styles.containerMain}>

      

      <View style={styles.container1}>
        
      </View>

      <View style={styles.container2}>
        <Text style={styles.container1Text}>Contador: {contador}</Text>
        <View style={styles.button}>
          <Button title="Incrementar" onPress={incrementarContador} />
          <Button title="Decrementar" onPress={decrementarContador} />
        </View>
      </View>

      <View style={styles.container3}>

      </View>

    </View>
    
  );
}

export default ExemploUseState;


const styles = StyleSheet.create({
  containerMain:{
    flex: 1,
    backgroundColor: 'blue'
  },
  container1:{
    flex: 1,
    backgroundColor: 'red',
    
  },
  button:{
    width: 150
  },
  container1Text:{
    fontSize: 24,
    marginBottom: 10,
    alignContent: 'center'
  },
  container2:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'darkorange'
  },
  container3:{
    flex: 2,
    backgroundColor:'green'
  }

})