import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import Card from './Card'
import ButtonBox from './ButtonBox'

const Quiz = () => {
    // setup state for the header and question to change
   const [questions, setQuestions] = useState({})
   const [selected, setSelected] = useState(0)
    // useEffect make axios request to fetch the quesiton data
    useEffect(() => {
        const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
        axios.get(url)
            .then( response => {
                console.log("promise fulfilled")
                setQuestions(response.data.results)})
            .catch( err => console.error(err))
    }, [])
    console.log(questions)

    /** handleSubmit to:
        - collect and join the answer input into state
        - increment to the next question's data
    **/


    return(
        <>
            <Header text={questions[selected]?.category || ''}/>
            <Card 
                questions={questions}
                selected={selected} />   
            <ButtonBox />      
        </>
    )
}

export default Quiz