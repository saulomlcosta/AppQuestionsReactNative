import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Question = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const isCorrect = selectedOption === correctAnswer;

  const buttonColor = isCorrect ? 'green' : 'red';

  return (
    <View style={ styles.container }>
      <Text style={ styles.question }>{ question }</Text>
      { options.map((option, index) => (
        <Pressable
          key={ index }
          style={ [styles.option, { backgroundColor: selectedOption === option ? buttonColor : '#007bff' }] }
          onPress={ () => handleOptionSelect(option) }
        >
          <Text style={ styles.optionText }>{ option }</Text>
        </Pressable>
      )) }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  option: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});

export default Question;
