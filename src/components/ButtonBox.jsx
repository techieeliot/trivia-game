import React from 'react'
import styled from 'styled-components'

export default () => {
    return(
        <>
            <ButtonBox>
                <Button>True</Button>
                <Button>False</Button>
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
    margin-bottom: 2rem;
`