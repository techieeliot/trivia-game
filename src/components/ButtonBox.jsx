import React from 'react'
import styled from 'styled-components'

export default ({handleTrueClick, handleFalseClick, allClicks}) => {
     
    return(
        <>
            <ButtonBox>
                {/* ternary checks if completed quiz through question 10 yet*/}
                {(allClicks.length > 9) ?
                    // if question 10 complete show results button
                    <>
                        <Button type="submit">results</Button>
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

const ButtonBox = styled.footer`
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
`

const Button = styled.button`
    order: none;
    appearance: none;
    color: inherit;
    background-color: inherit;
    font: 500 1.25rem Arial;
    border: none;
    text-transform: uppercase;
`