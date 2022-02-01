import React from 'react'
import styled from 'styled-components'

const GlassContainer = styled.div`
  background-color: rgba(255, 255, 255, .15);
  backdrop-filter: blur(5px);
  width: 40rem;
  height: 30rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);
	border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container:React.FC = ({ children }) => {
  return(
    <GlassContainer>
      {children}
    </GlassContainer>
  )
}

export default Container
