import { Container } from './styles'

interface MessageBoxProps {
  title: string
  description: string
  footerText: string
}

const MessageBox: React.FC<MessageBoxProps> = ({
  title,
  description,
  footerText
}) => {
  return (
    <Container>
      <header>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  )
}

export default MessageBox
