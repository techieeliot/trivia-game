import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
// import { TriviaGameProvider } from './context/TriviaGameContext'

const QuestionsContext = createContext({
  question: [],
  setQuestions: () => []
});

const App = () => {
  
  const [questions, setQuestions] = useState([])
  
  // useEffect make axios request to fetch the quesiton data
  useEffect(() => {
    const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    axios.get(url)
        .then( response => {
            console.log("promise fulfilled")
            setQuestions(response.data.results)
        })
        .catch( err => console.error(err))
  }, [])

  console.log(questions)
 
  return (
    <QuestionsContext.Provider value={{questions, setQuestions}}>
      <Router>
        <main className="App">
          <Switch>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </QuestionsContext.Provider>
  );
}

export { App, QuestionsContext}
