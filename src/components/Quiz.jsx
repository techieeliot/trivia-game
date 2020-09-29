import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import Card from './Card'
import ButtonBox from './ButtonBox'

const Quiz = () => {
    // setup state for the header and question to change
   const [questions, setQuestions] = useState({})
   const [selected, setSelected] = useState(0)
   const [allClicks, setAllClicks] = useState([])

    // useEffect make axios request to fetch the quesiton data
    useEffect(() => {
        const url = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
        axios.get(url)
            .then( response => {
                console.log("promise fulfilled")
                setQuestions(response.data.results)})
            .catch( err => console.error(err))
    }, [])

    /** handleSubmit to:
        - collect and join the answer input into state array
        - increment to the next question's data
    **/

    const handleTrueClick = () => {
        setAllClicks(allClicks.concat('True'))
        if(allClicks.length < 9){
            return setSelected(selected + 1)
        }
    }
    const handleFalseClick = () => {
        setAllClicks(allClicks.concat('False'))
            if(allClicks.length < 9){
                return setSelected(selected + 1)
            }


    }

    return(
        <>
            <Header text={questions[selected]?.category || ''}/>
            <Card 
                questions={questions}
                selected={selected} />   
            <ButtonBox 
                handleTrueClick={handleTrueClick}     
                handleFalseClick={handleFalseClick} 
                selected={selected} />      
        </>
    )
}

export default Quiz