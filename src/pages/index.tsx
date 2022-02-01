import type { NextPage } from 'next'
import Link from 'next/link'
import Button from '../ui/Button/'
import { Grid, GridItem } from '@chakra-ui/react'
import styled from 'styled-components'
import Container from '../ui/Container'

const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: purple;
`

const Home: NextPage = () => {

  return (
    <MainContainer>
      <Container>
        <Grid
          templateRows='repeat(3, 1fr)'
          templateColumns='repeat(3, 2fr)'
          gap={4}
        >
          <GridItem colSpan={3}>
            <Link href={'/login'} passHref>
              <Button
                size='large'
                type='primary'
                label='Login'
              />
            </Link>
          </GridItem>
          <GridItem colSpan={3}>
            <Link href={'/signup'} passHref>
              <Button
                  size='large'
                  type='primary'
                  label='Signup'
                />
            </Link>
          </GridItem>
          <GridItem colSpan={3}>
            <Link href={'/home'} passHref>
              <Button
                  size='large'
                  type='primary'
                  label='Continue as Guest'
                />
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </MainContainer>
  )
}

export default Home
