import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateHR = () => {
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum <= 0 || ageNum >= 120) {
      Alert.alert('Invalid Input', 'Please enter a valid age between 1 and 120.');
      return;
    }

    const lowerLimit = Math.floor((220 - ageNum) * 0.65);
    const upperLimit = Math.floor((220 - ageNum) * 0.85);
    setLimits(`${lowerLimit}-${upperLimit}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        placeholderTextColor="#aaa"
      />
      {limits ? <Text style={styles.result}>Limits: {limits}</Text> : null}
      <TouchableOpacity style={styles.calculateButton} onPress={calculateHR}>
        <Text style={styles.calculateButtonText}>CALCULATE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
 
calculateButton: {
    width: '80%',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    color: '#000',
    marginTop: 20,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
});
