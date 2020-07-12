import React, { Component }  from 'react';
//import FlagAnswer from './FlagAnswer';

const QuizQuestion = (props) => {


    const handleGuess = (guessedOptionLabel) => {
        return props.handleGuess(optionFromLabel(guessedOptionLabel));
    }

    const userResponse = () => {
        if(props.guessedOption > -1) {
            if(props.guessedOption===props.correctOption) {
                return <h2>Correct!</h2>;
            }else{
                return <h2>Nice try, but no.</h2>;
            }
        }
    }

    const countryFrom = (option) => {
        return props.alternatives[option];
    }

    const optionFromLabel = (optionLabel) => {
        return props.alternatives.findIndex((element) => (element===optionLabel))
    }

    const getButtonColor = (option) => {
        if(props.guessedOption > -1) {
            if(option === props.correctOption) {
                return 'green';
            }else if(option === props.guessedOption){
                return 'red';
            }
        }
        return 'azure';
    }

        return(
            <div style={{margin: '100px'}}>
                {!props.isFinished && 
                    <h2>{props.questionText}</h2>
                }
                {props.image && 
                    <img 
                        src={props.image}
                        alt={props.imageAlternative}
                        width={"500px"}
                    />
                }
                <br />
                <div>
                    {(props.alternatives.map( (optionLabel, option) => (
                        <button
                            key={optionLabel}
                            onClick={() => handleGuess(optionLabel)}
                            style = {{
                                backgroundColor: getButtonColor(option),
                                color: props.guessedOption > -1 ? 'white' : 'black',
                                width: '120px',
                                height: '60px',
                                margin: '4px'
                            }}
                            disabled={props.guessedOption > -1}
                        ><b>{optionLabel}</b></button>
                    )))}
                </div>
                {!props.isFinished && 
                    userResponse()
                }       
                {/* {(props.guessedOption > -1 && !props.isFinished) &&
                    <button
                        onClick = { () => props.nextQuestion() }
                    >Next</button>
                } */}
            </div>
        )
}

export default QuizQuestion;