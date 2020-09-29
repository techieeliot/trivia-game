import React, { useState, useContext } from 'react'
import Header from './Header'
import Card from './Card'
import ButtonBox from './ButtonBox'
import { QuestionsContext } from '../context/TriviaGameContext'

const Quiz = () => {
   const [selected, setSelected] = useState(0)
   const [allClicks, setAllClicks] = useState([])
   const questions = useContext(QuestionsContext);

    /** handleSubmit to:
        - collect and join the answer input into state array
        - create True or False in the allClicks store array
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
                allClicks={allClicks} />      
        </>
    )
}

export default Quiz