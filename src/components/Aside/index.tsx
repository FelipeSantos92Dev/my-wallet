import { Container, Header, Title, MenuContainer, MenuItemLink } from './styles'
import {
  MdArrowDownward,
  MdArrowUpward,
  MdDashboard,
  MdExitToApp
} from 'react-icons/md'

import logo from '../../assets/wallet.svg'
import Image from 'next/image'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="Imagem de uma carteira" width={40} height={40} />
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowUpward />
          Saídas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  )
}

export default Aside
