import React, { Component, useState} from 'react';
import QuizQuestion from './QuizQuestion';

const Quiz = (props) => {
    
    const [guessedOptions, setGuessedOptions] = useState([-1]);
    const [currentStep, setCurrentStep] = useState(0);

    const handleGuess = (lastGuessedOption) => {
      var updatedArray = currentStep<props.questions.length-1 ? [...guessedOptions, -1] : guessedOptions;
      updatedArray[currentStep] = lastGuessedOption;
      setGuessedOptions(updatedArray);
      setTimeout( () => nextQuestion(), 2000)
    }

    const nextQuestion = () => {
      if(currentStep<props.questions.length) {
        setCurrentStep(currentStep+1)
      }
    }

    const isFinished = () => {
      return currentStep===props.questions.length;
    }

    const calculateScore = () => {
      var score = 0;
      props.questions.forEach( (question, i) => {
        if(guessedOptions[i]===question.correctOption) {
          score++;
        }
      })
      return score;
    }


  
    return (
      <div>
        {!isFinished() &&
          <QuizQuestion 
            questionText      = {props.questions[currentStep].questionText}
            image             = {props.questions[currentStep].image}
            imageAlternative  = {props.questions[currentStep].imageAlternative}
            alternatives      = {props.questions[currentStep].alternatives}
            correctOption     = {props.questions[currentStep].correctOption}
            guessedOption     = {guessedOptions[currentStep]}
            handleGuess       = {(guessedOption) => handleGuess(guessedOption)}
            nextQuestion      = { () => nextQuestion() }
          />
        }

        {isFinished() &&
          <div>
            <h2>Good job. You got {calculateScore()}/{props.questions.length}</h2>
            {props.questions.map( (question, i) => (
              <QuizQuestion 
                key               = {question.image}
                questionText      = {question.questionText}
                image             = {question.image}
                imageAlternative  = {question.imageAlternative}
                alternatives      = {question.alternatives}
                correctOption     = {question.correctOption}
                guessedOption     = {guessedOptions[i]}
                isFinished        = {true}
              />
            ))}
          </div>
        }
      </div>
    );
  
}

export default Quiz;
