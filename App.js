import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  // Todo 
  // Text for info / update
  // TextInput for user
  // Button for guesses
  // Pop (alert.alert) for correct answer
  // State counter
  // State info
  // State userGuess
  // State randomNum

  const [guess, setGuess] = useState('');
  const [counter, setCounter] = useState(1);
  const [infoText, setInfoText] = useState('');
  const [randomNum, setRandomNum] = useState('');

  useEffect(() => resetGame(), [])

  const resetGame = () => {
    setRandomNum(Math.floor(Math.random()*100 +1));
    setInfoText('Guess a number betweeb 1-100');
    setGuess('');
    setCounter(1);
  }

  const makeGuess = () => {
    if (parseInt(guess) === randomNum) {
      Alert.alert('You guessed the number in ' + counter + ' guesses');
      resetGame();
    }
    else if (parseInt(guess) < randomNum) {
      setInfoText('Your guess ' + guess + ' is too low')
    }
    else {
      setInfoText('Your guess ' + guess +  ' is too high')
    }

    setGuess('');
    setCounter(prevCounter => prevCounter +1);

  }

  return (
    <View style={styles.container}>
      <Text>{infoText}</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        onChangeText={guess => setGuess(guess)}
        value={guess}
      />
      <Button onPress={makeGuess} title='make guess' />
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
  input: {
    borderColor: 'grey',
    width: 80,
    fontSize: 20,
    borderWidth:1,
    margin:20
  }
});
