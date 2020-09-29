import React, { createContext, useState} from 'react'

const QuestionsContext = createContext({});
const AnswersContext = createContext({});

const TriviaGameProvider = ({children}) => {
    const [questions, answers] = useState({})
    return (
      <QuestionsContext.Provider value={questions}>
        <AnswersContext.Provider value={answers}>
          {children}
        </AnswersContext.Provider>
      </QuestionsContext.Provider>
    )
  }


export { TriviaGameProvider, QuestionsContext, AnswersContext } 