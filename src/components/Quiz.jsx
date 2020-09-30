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
   const context = useContext(QuestionsContext);
   const questions = context.questions
   const {userAnswers, setUserAnswers} = context.answersObject
   const history = useHistory()

    /** handleSubmit to:
        - collect and join the answer input into state array
        - create True or False in the allClicks store array
        - increment to the next question's data
    **/

    const handleTrueClick = (event) => {
        event.preventDefault()
        setAllClicks(allClicks.concat('True'))
        if(allClicks.length < 9){
            return setSelected(selected + 1)
        }
    }
    const handleFalseClick = (event) => {
        event.preventDefault()
        setAllClicks(allClicks.concat('False'))
        if(allClicks.length < 9){
            return setSelected(selected + 1)
        }
    }

    const addUserAnswers = (event) => {
        event.preventDefault()
        const userAnswerObject = {
        date: new Date().toISOString(),
        id: userAnswers.length + 1,
        content: allClicks
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export default Quiz