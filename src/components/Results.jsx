import React, { useState, useContext, useEffect } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { QuestionsContext } from '../App'


const Results = ({ allClicks}) => {
    const context = useContext(QuestionsContext)
    const questions = context.questions
    const {userAnswers, setUserAnswers} = context.answersObject
    const mostRecentAnswers = userAnswers[userAnswers.length - 1]
    const correct = mostRecentAnswers.correct
    const score = `You scored \n${correct}/10`

    
    // const calculateScore = () => {
    //     const usersAnswers
    //     for (const iterator of object) {
            
    //     }
    // }
    // useEffect(
    //     calculateScore()

    // , [])
    // calculateScore()
    return(
        <>
            <Header 
                text={score}/>
            <section>
                {mostRecentAnswers.results[0]} {questions[0].question}
            </section>
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