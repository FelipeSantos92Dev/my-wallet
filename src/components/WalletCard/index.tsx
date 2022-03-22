import Image from 'next/image'
import CountUp from 'react-countup'
import { Container } from './styles'

import dollar from 'assets/dollar.svg'
import arrowUp from 'assets/arrow-up.svg'
import arrowDown from 'assets/arrow-down.svg'

interface WalletCardProps {
  title: string
  amount: number
  footer: string
  color: string
  icon: 'dollar' | 'up' | 'down'
}

export const WalletCard: React.FC<WalletCardProps> = ({
  title,
  amount,
  footer,
  color,
  icon
}) => {
  const iconSelected = () => {
    switch (icon) {
      case 'dollar':
        return dollar
      case 'up':
        return arrowUp
      case 'down':
        return arrowDown
      default:
        return null
    }
  }
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          prefix={'R$ '}
          end={amount}
          separator={'.'}
          decimal={','}
          decimals={2}
        />
      </h1>
      <small>{footer}</small>
      <div>
        <Image src={iconSelected()} alt={title} width={150} height={150} />
      </div>
    </Container>
  )
}
