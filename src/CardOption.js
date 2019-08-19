import React from 'react'
import styled from 'styled-components/macro'

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
const Checkbox = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: black;
  margin: 10px;
`
const OptionText = styled.div`
  flex: 1 0 auto;
`

const CardOption = ({ card }) => {
  return (
    <CardOptionContainer>
      <CardSwatch colour={card.colour} />
      <OptionText>{card.name}</OptionText>
      <Checkbox />
    </CardOptionContainer>
  )
}
export default CardOption
