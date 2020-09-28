import React from 'react'
import styled from 'styled-components'

export default () => {

    return(
        <>
            <Content>
                <p>You will be presented with 10 True or False questions</p>
                <p>Can you score 100%?</p>
                <Button>BEGIN</Button>
            </Content>
        </>
    )
}

const Content = styled.section`
    color: #262626;
    font-size: 25px;
    font-weight: 700;
`

const Button = styled.button`

`