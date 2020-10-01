import React from 'react'
import styled from 'styled-components'

export default ({text}) => (

    <Header>
        <h1>{text}</h1>
    </Header>

)

const Header = styled.header`
    font-size: 1rem;
`

