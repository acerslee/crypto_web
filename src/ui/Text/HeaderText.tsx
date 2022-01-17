import React, { FC } from 'react'
import styled from 'styled-components'

const HeaderTextContainer = styled.div`

`

const HeaderText:FC = ({children}) => {
    return(
        <HeaderTextContainer>
            <h1>{children}</h1>
        </HeaderTextContainer>
    )
}

export default HeaderText