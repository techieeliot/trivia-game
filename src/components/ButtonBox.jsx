import React, { useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { QuestionsContext } from '../App'

export default ({handleTrueClick, handleFalseClick, allClicks}) => {
    const [isComplete, setIsComplete] = useState(false)
    const questions = useContext(QuestionsContext)
    const [selected, setSelected] = useState(0)

    
    const calculateScore = (answers) => {
        questions[selected].map(item => {
            return console.log(item)
        })
        console.log('You ran the calculate score effect')
    }
    useEffect(
        (allClicks.length > 9) ? 
            setIsComplete(true)
            .then(calculateScore(allClicks))
        : ''

    , [allClicks])
    return(
        <>
            <ButtonBox>
                {/* ternary checks if completed quiz through question 10 yet*/}
                {(isComplete) ?
                    // if question 10 complete show results button
                    <>
                        <Link to="/results">
                            <Button>results</Button>
                        </Link>
                    </>
                :
                    // if not question 10 show true/false button
                    <>
                        <Button onClick={handleTrueClick}>true</Button>
                        <Button onClick={handleFalseClick}>false</Button>
                    </>
                }
            </ButtonBox>
        </>
    )
}

const ButtonBox = styled.section`
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
`

const Button = styled.button`
    order: none;
    appearance: none;
    color: inherit;
    background-color: inherit;
    font: 500 30px Arial;
    border: none;
    text-transform: uppercase;
`