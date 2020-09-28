import React from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default () => {

    return(
        <>
            <Content>You will be presented with 10 True or False questions</Content>
            <Content>Can you score 100%?</Content>
            <Link to="/quiz">
                <Button>Begin</Button>
            </Link>
        </>
    )
}

const Content = styled.section`
    color: #262626;
    font: 500 25px Arial;
    display: flex;
    flex-direction: column;
    justify-content: space-between;`

const Button = styled.button`
    order: none;
    appearance: none;
    color: inherit;
    background-color: inherit;
    font: 500 30px Arial;
    border: none;
    text-transform: uppercase;
    margin-bottom: 2rem;`