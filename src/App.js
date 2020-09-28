import React from 'react';
import './App.css';
import Home from './components/Home'
import Quiz from './components/Quiz'
import Results from './components/Results'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
