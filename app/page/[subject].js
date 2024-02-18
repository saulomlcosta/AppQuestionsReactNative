import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Question from '../Components/Question';
import { questionsData } from '../Data/QuestionsData';
import { useLocalSearchParams } from 'expo-router';
import { shuffle } from 'lodash';

const Subject = () => {
  const { subject } = useLocalSearchParams();

  const filteredQuestions = questionsData.filter(
    question => question.subject === subject
  );

  const shuffledQuestions = shuffle(filteredQuestions);

  return (
    <ScrollView contentContainerStyle={ styles.container }>
      { shuffledQuestions.map((question, index) => (
        <Question
          key={ index }
          question={ question.question }
          options={ question.options }
          correctAnswer={ question.correctAnswer }
        />
      )) }
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'stretch',
    backgroundColor: '#1f1f1f'
  },
});

export default Subject;
