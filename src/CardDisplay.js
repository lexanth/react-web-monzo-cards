import React from 'react'
import styled from 'styled-components/macro'
import { useTransition, animated } from 'react-spring'
import Card from './Card'

const CardView = styled.div`
  flex: 1;
`
const CardWrapper = styled(animated.div)`
  position: absolute;
  top: 200px;
  left: 70px;
  transform-origin: -50% 50%;
`

const CardDisplay = ({ cards }) => {
  const items = useTransition(cards, card => card.colour, {
    from: { transform: 'rotateZ(0deg)' },
    enter: card => {
      const index = cards.indexOf(card)
      return { transform: `rotateZ(${(index - 1) * 15}deg)` }
    },
  })
  return (
    <CardView>
      {items.map(({ item, props, key }) => (
        <CardWrapper key={key} style={props}>
          <Card colour={item.colour} />
        </CardWrapper>
      ))}
    </CardView>
  )
}
export default CardDisplay
