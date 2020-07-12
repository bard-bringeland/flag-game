import React, { Component} from 'react';
import Quiz from './Quiz';

class FlagQuizContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const filteredData = data.filter((country) => country.population>200000);
            const questions = this.processInput(filteredData);
            this.setState({
                questions,
                isLoading: false
            });
        });
    }

    processInput(data) {
        var questions = [];
            while(questions.length < this.props.numberOfQuestions) { 
                const i = Math.floor(Math.random()*data.length);
                var alternatives = [];
                while(alternatives.length+1 < this.props.numberOfAlternatives) {
                    const alternative = data[Math.floor(Math.random()*data.length)].name;
                    if(!alternatives.includes(alternative) && alternative!==data[i].name) {
                        alternatives.push(alternative);
                    }
                }  
                const correctOption = Math.floor(Math.random()*this.props.numberOfAlternatives);
                alternatives.splice(correctOption, 0, data[i].name)
                const question = {
                    questionText: 'Guess the Flag!',
                    image: data[i].flag,
                    imageAlternative: "Flag",
                    alternatives: alternatives,
                    correctOption: correctOption
                }
                questions.push(question);
            }
        return questions;
    }

    handleGuess(guessedOption) {
      this.setState((state) => ({
        guessedOption
      }));
    }
 
  render() {
    return (
    <div className="App">
        {this.state.isLoading &&
            <p>... loading ...</p>}
        {!this.state.isLoading && 
            <Quiz
                questions={this.state.questions}
            />
        }
    </div>
    );
  }
}

export default FlagQuizContainer;
