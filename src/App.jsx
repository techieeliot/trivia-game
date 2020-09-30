import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'

const QuestionsContext = createContext({
  question: [],
  setQuestions: () => [], 
  scores: [], 
  setScores: () => []
});

const App = () => {
  
  const [questions, setQuestions] = useState([])
  const [scores, setScores] = useState([])
  const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  // useEffect make axios request to fetch the quesiton data
  useEffect(() => {
    const loadQuestions = () => {axios.get(url, { cancelToken: source.token })
      .then( response => {
          console.log("promise fulfilled")
          setQuestions(response.data.results)
      })
      .catch( error =>   {      
          if (axios.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      })
    }

    loadQuestions()

    return () => {
      source.cancel();
    };
  }, [scores])

  console.log(questions)
 
  return (
    <QuestionsContext.Provider value={{questions: questions, scores: scores}}>
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
