import React from 'react'
import styled from 'styled-components/macro'
import CardOption from './CardOption'

const CardOptionList = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const CardSelector = ({ cards, selectedCardIndex, setCardIndex }) => {
  return (
    <CardOptionList>
      {cards.map((card, index) => (
        <CardOption
          key={card.colour}
          card={card}
          selectedCardIndex={selectedCardIndex}
          setCardIndex={setCardIndex}
          index={index}
        />
      ))}
    </CardOptionList>
  )
}
export default CardSelector
