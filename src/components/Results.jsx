import React, { useState, useContext } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { QuestionsContext } from '../context/TriviaGameContext'


const Results = ({ allClicks}) => {
    const questions = useContext(QuestionsContext)
    const [choices, setChoices] = useState(allClicks)
    const [correct, setCorrect] = useState(0)
    const score = `You scored \n${correct}/10`

    return(
        <>
            <Header 
                text={score}/>
            <section>
                
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
    font: 500 30px Arial;
    border: none;
    text-transform: uppercase;
    margin-bottom: 2rem;
`