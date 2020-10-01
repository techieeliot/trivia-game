import React, { useContext } from 'react'
import styled from 'styled-components'
import { QuestionsContext } from '../App'
import { XmlEntities as Entities, AllHtmlEntities } from 'html-entities'

export default ({ selected}) => {
    const data = useContext(QuestionsContext);
    const entities = new Entities();
    const allHtmlEntities = new AllHtmlEntities()
    const questions = data.questions
    
    return(
    <>
           <Card>
                <BlackBox lang="en">
                    <Question>
                        {entities.decode(allHtmlEntities.decode(questions[selected]?.question)) || "...loading"}
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
    font: 500 1.15rem Arial;
`

const BlackBox = styled.section`
    max-height: 50vh;
    width: auto;
    padding: 3rem 1rem;
    border: 1px black solid;
`

const Question = styled.p`
    margin: 20% 8%;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
`

const QuestionNumber = styled.p`
    color: #262626;
    font: 500 1.25rem Arial;
`