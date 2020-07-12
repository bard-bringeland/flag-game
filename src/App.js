import React, { Component} from 'react';
import FlagQuizContainer from './FlagQuizContainer';
import './App.css';

class App extends Component{

  render() {
    return (
    <div className="App">
        <FlagQuizContainer 
          numberOfQuestions = {6}
          numberOfAlternatives = {4}
        />
    </div>
    );
  }
}

export default App;
