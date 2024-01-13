import { Container } from './styles'
import { PiMinus, PiPlus } from 'react-icons/pi'

export function Amount({ amount }) {
  return (
    <Container>
      <button class="minus" type="button">
        {amount ? <PiMinus/> : ''}
      </button>

      <strong> {amount ? '01' : ''}</strong>

      <button class="plus" type="button">
        {amount ? <PiPlus/> : ''}
      </button>
    </Container>
  )
}