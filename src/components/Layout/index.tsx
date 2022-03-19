import { Grid } from './styles'

import MainHeader from 'components/MainHeader'
import Aside from 'components/Aside'
import Content from 'components/Content'

const Layout: React.FC = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  )
}

export default Layout
