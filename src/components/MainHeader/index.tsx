import { Toggle } from 'components/Toggle'
import { Container, Profile, Welcome, UserName } from './styles'

const MainHeader: React.FC = () => {
  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, Felipe</Welcome>
        <UserName>dev.felipesantos@gmail</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader
