import React from 'react'
import styled from 'styled-components/macro'
import { useTransition, animated } from 'react-spring'

const CardOptionContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-top: 1px solid darkslategrey;
`
const CardSwatch = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 8px;
  background-color: ${props => props.colour};
  margin: 10px;
`
const Checkbox = styled(animated.div)`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: black;
  margin: 10px;
`
const OptionText = styled.div`
  flex: 1 0 auto;
`

const CardOption = ({ card, index, selectedCardIndex, setCardIndex }) => {
  const isSelected = index === selectedCardIndex
  const transitions = useTransition(isSelected, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <CardOptionContainer onClick={() => setCardIndex(index)}>
      <CardSwatch colour={card.colour} />
      <OptionText>{card.name}</OptionText>
      {transitions.map(
        ({ item, key, props }) => item && <Checkbox key={key} style={props} />
      )}
    </CardOptionContainer>
  )
}
export default CardOption
