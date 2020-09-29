import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default ({handleTrueClick, handleFalseClick, allClicks}) => {
    return(
        <>
            <ButtonBox>
                {/* ternary checks if on question 10 yet*/}
                {(allClicks.length < 10) ?
                    // if not question 10 show true/false button
                    <>
                        <Button onClick={handleTrueClick}>true</Button>
                        <Button onClick={handleFalseClick}>false</Button>
                    </>
                :
                    // if question 10 show results button
                    <>
                        <Link to="/results">
                            <Button>results</Button>
                        </Link>
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