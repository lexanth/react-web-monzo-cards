import React from 'react'
import styled from 'styled-components/macro'
import { CARDS } from './constants'
import CardDisplay from './CardDisplay'
import CardSelector from './CardSelector'

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background-color: black;
  flex: 0 0 40px;
`
const Content = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #f4f6f3;
`
const Footer = styled.footer`
  background-color: black;
  flex: 0 0 40px;
`

function App() {
  const cards = CARDS
  return (
    <AppContainer>
      <Header />
      <Content>
        <CardDisplay cards={cards} />
        <CardSelector cards={cards} />
      </Content>
      <Footer />
    </AppContainer>
  )
}

export default App
