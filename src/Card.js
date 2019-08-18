import styled from 'styled-components/macro'
import { CARD_HEIGHT, CARD_WIDTH } from './constants'

const Card = styled.div`
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  border-radius: 20px;
  background-color: ${props => props.colour};
`
export default Card
