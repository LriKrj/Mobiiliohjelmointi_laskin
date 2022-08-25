import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const addPressed = () => {
    setResult(parseInt(number1)+(parseInt(number2)));

  }
  const minusPressed = () => {
    setResult(parseInt(number1)-(parseInt(number2)));
  }
  

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <StatusBar style="auto" />
      <View>
        <TextInput style={styles.inputs}  keyboardType = 'numeric' onChangeText={number1=>setNumber1(number1)} value={number1}/>
        <TextInput style={styles.inputs}  keyboardType = 'numeric' onChangeText={number2=>setNumber2(number2)} value={number2}/>
      </View>
      <View style={styles.buttons}>
        <Button onPress={addPressed} title="+"/>
        <Button onPress={minusPressed} title="-"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: "row"
  },
  inputs: {
    width:200,
    borderColor: 'black',
    borderWidth: 1
  },
});
