import React from 'react'
import styled from 'styled-components/macro'
import CardOption from './CardOption'

const CardOptionList = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const CardSelector = ({ cards }) => {
  return (
    <CardOptionList>
      {cards.map(card => (
        <CardOption key={card.colour} card={card} />
      ))}
    </CardOptionList>
  )
}
export default CardSelector
