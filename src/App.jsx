import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'

const QuestionsContext = createContext({
  questions: [],
  setQuestions: () => [], 
  userAnswers: [], 
  setUserAnswers: () => []
});

const App = () => {

  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  const value = { userAnswers, setUserAnswers}
  const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  // useEffect make axios request to fetch the quesiton data
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
  useEffect(() => {
    
    loadQuestions()
      return () => {
        source.cancel();
      };

  }, [userAnswers])

  console.log(questions)

  // useEffect(() => {
  //   if()
  // })
 
  return (
    <QuestionsContext.Provider value={{questions: questions, answersObject: value}}>
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
