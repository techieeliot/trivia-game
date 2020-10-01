import React, { useContext } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { QuestionsContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'



const Results = ({ allClicks}) => {
    const context = useContext(QuestionsContext)
    const questions = context.questions
    const {userAnswers} = context.answersObject
    const mostRecentAnswers = userAnswers[userAnswers.length - 1]
    const correct = mostRecentAnswers.correct
    const score = `You scored \n${correct}/10`
    
    return(
        <>
            <Header text={score}/>
            <DisplayGrades>
                <tbody>
                    {questions.map(question => {
                        return (
                        <Question>
                            <IconCell>
                            {/* ternary returns plu or minus if Correct or Incorrect */}
                            {(mostRecentAnswers.results[questions.indexOf(question)] === "Correct") ? 
                                <FontAwesomeIcon icon={faPlus} /> : 
                                <FontAwesomeIcon icon={faMinus} /> }
                            </IconCell>
                            <QuestionCell>{question.question}</QuestionCell>
                        </Question> 
                        )
                    })}
                </tbody>
            </DisplayGrades>
            <Link to="/">
                <Button>play again?</Button>
            </Link>
        </>
    )
}

export default Results

const Button = styled.button`
    order: none;
    appearance: none;
    color: inherit;
    background-color: inherit;
    font: 500 1.25rem Arial;
    border: none;
    text-transform: uppercase;
    margin-bottom: 2rem;
`

const DisplayGrades = styled.table`
    height: auto;
    margin: 1rem 0.25rem;
`

const Question = styled.tr`
    font: 400 1rem Arial;
    color: #828282;
    text-align: left;
`
const IconCell = styled.td`

    vertical-align: text-top;
`
const QuestionCell = styled.td`
    padding: 0 0 0 1rem;
`