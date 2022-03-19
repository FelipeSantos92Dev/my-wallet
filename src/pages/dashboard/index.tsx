import ContentHeader from 'components/ContentHeader'
import SelectInput from 'components/SelectInput'
import { Container } from './styles'

const Dashboard: React.FC = () => {
  const options = [
    { value: 'Felipe', label: 'Felipe' },
    { value: 'Karen', label: 'Karen' },
    { value: 'Teste', label: 'Teste' }
  ]
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}

export default Dashboard
