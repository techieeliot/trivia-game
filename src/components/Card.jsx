import React from 'react'
import styled from 'styled-components'

export default ({questions, selected}) => {

    return(
    <>
           <Card>
                <BlackBox>
                    <Question>
                        {questions[selected]?.question || "...loading"}
                    </Question>
                </BlackBox>
                <QuestionNumber>
                    {(questions.length) ? `${selected + 1} of ${questions.length}`: ''}
                </QuestionNumber>
            </Card>  
    </>
)}

const Card = styled.section`
    height: auto;
    width: 80vw;
    color: #262626;
    font: 500 25px Arial;
`

const BlackBox = styled.section`
    height auto;
    width: auto;
    padding: 4rem 1rem;
    border: 1px black solid;
`

const Question = styled.p`
    margin: 25% 10%;
`

const QuestionNumber = styled.p`
    color: #262626;
    font: 500 25px Arial;
`