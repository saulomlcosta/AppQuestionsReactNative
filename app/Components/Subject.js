import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Question from './Question';
import { questionsData } from '../Data/QuestionsData';

const Subject = ({ subject }) => {
  const filteredQuestions = questionsData.filter(question => question.subject === subject);

  return (
    <ScrollView contentContainerStyle={ styles.container }>
      { filteredQuestions.map((question, index) => (
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
  },
});

export default Subject;
