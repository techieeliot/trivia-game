import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
import { TriviaGameProvider, QuestionsContext } from './context/TriviaGameContext'


const App = () => {
  
  const [questions, setQuestions] = useContext(QuestionsContext)
  
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
 
  return (
    <Router>
      <TriviaGameProvider>
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
      </TriviaGameProvider>
    </Router>
  );
}

export default App
