import { Container } from './styles'

import MainHeader from 'components/MainHeader'
import Aside from 'components/Aside'
import Content from 'components/Content'

const Layout: React.FC = () => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
    </Container>
  )
}

export default Layout
