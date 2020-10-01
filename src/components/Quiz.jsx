import React, { useState, useContext, useEffect } from 'react'
import Header from './Header'
import Card from './Card'
import ButtonBox from './ButtonBox'
import { QuestionsContext } from '../App'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Quiz = () => {
   const [selected, setSelected] = useState(0)
   const [allClicks, setAllClicks] = useState([])
   const [grades, setGrades] = useState([])
   const [correct, setCorrect] = useState(0)
   const context = useContext(QuestionsContext);
   const questions = context.questions
   const {userAnswers, setUserAnswers} = context.answersObject
   const history = useHistory()

    /** handleSubmit to:
        X collect and join the answer input into state array
        X create True or False in the allClicks store array
        X increment to the next question's data
    **/

    const handleTrueClick = (event) => {
        event.preventDefault()
        setAllClicks(allClicks.concat('True'))
        const correctAnswer = questions[selected].correct_answer
        if (correctAnswer == "True") {
            setGrades(grades.concat('Correct'))
            setCorrect(correct + 1)
        }
        if (correctAnswer != "True") {
            setGrades(grades.concat('Incorrect'))
        }
        if(allClicks.length < 9){
            return setSelected(selected + 1)
        }
    }
    const handleFalseClick = (event) => {
        event.preventDefault()
        setAllClicks(allClicks.concat('False'))
        const correctAnswer = questions[selected].correct_answer

        if (correctAnswer == "False") {
            setGrades(grades.concat('Correct'))
            setCorrect(correct + 1)
        }
        if (correctAnswer != "False") {
            setGrades(grades.concat('Incorrect'))
        }
        if(allClicks.length < 9){
            return setSelected(selected + 1)
        }
    }

    const addUserAnswers = (event) => {
        event.preventDefault()
        const userAnswerObject = {
            date: new Date().toISOString(),
            id: userAnswers.length + 1,
            answers: allClicks,
            results: grades,
            correct: correct
        }
        console.log(userAnswerObject)
        setUserAnswers(userAnswers.concat(userAnswerObject))
        console.log(userAnswers)
        history.push("/results")
    }
  
    return(
        <>
            <Form onSubmit={addUserAnswers}>
                <Header text={questions[selected]?.category || ''} />
                <Card 
                    selected={selected} />
                <ButtonBox
                    handleTrueClick={handleTrueClick}
                    handleFalseClick={handleFalseClick}
                    allClicks={allClicks} />
            </Form>
        </>
    )
}

const Form = styled.form`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export default Quiz