import { useMemo } from 'react'

import { Toggle } from 'components/Toggle'
import emojis from 'utils/emojis'
import { Container, Profile, Welcome, UserName } from './styles'

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Felipe Santos</UserName>
      </Profile>
    </Container>
  )
}

export default MainHeader
