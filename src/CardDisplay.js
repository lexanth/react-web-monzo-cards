import React from 'react'
import styled from 'styled-components/macro'
import { useTransition, animated, config } from 'react-spring'
import Card from './Card'
import { INITIAL_SELECTION } from './constants'

const CardView = styled.div`
  flex: 1;
`
const CardWrapper = styled(animated.div)`
  position: absolute;
  top: 200px;
  left: 70px;
`

const fanOutAnimation = index => ({
  transform: `rotateZ(${(index - 1) * 15}deg)`,
  transformOrigin: '-50% 50%',
})

const unselectedCardAnimation = (index, selectedCardIndex) => ({
  transform: `rotateZ(${
    index === selectedCardIndex + 1 || index === selectedCardIndex - 2
      ? 7.5
      : -7.5
  }deg)`,
  transformOrigin: '50% 50%',
})

let maxZ = 1

const CardDisplay = ({ cards, selectedCardIndex }) => {
  const items = useTransition(cards, card => card.colour, {
    from: { transform: 'rotateZ(0deg)', zIndex: 0 },
    enter: card => {
      const index = cards.indexOf(card)
      return fanOutAnimation(index)
    },
    update: card => {
      const index = cards.indexOf(card)
      if (selectedCardIndex === INITIAL_SELECTION) {
        return fanOutAnimation(index)
      } else if (selectedCardIndex === index) {
        return [
          {
            transform: 'rotateZ(45deg)',
            transformOrigin: '180% 50%',
            zIndex: maxZ++,
          },
          { transform: 'rotateZ(0deg)' },
        ]
      }
      return unselectedCardAnimation(index, selectedCardIndex)
    },
    config: config.stiff,
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
