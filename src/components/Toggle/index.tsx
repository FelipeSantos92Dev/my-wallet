import { Container, ToggleLabel } from './styles'
import { ToggleSelector } from './styles'

export const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked={false}
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={() => console.log('Mudou')}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
)
