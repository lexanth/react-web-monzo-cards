import React from 'react'
import styled from 'styled-components/macro'
import Card from './Card'

const CardView = styled.div`
  flex: 1;
`
const CardDisplay = ({ cards }) => {
  return (
    <CardView>
      {cards.map(card => {
        return <Card colour={card.colour} key={card.colour} />
      })}
    </CardView>
  )
}
export default CardDisplay
