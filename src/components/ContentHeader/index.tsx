import { Container, TitleContainer, Controllers } from './styles'

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
        <button type="button">Save</button>
        <button type="button">Cancel</button>
      </Controllers>
    </Container>
  )
}

export default ContentHeader
