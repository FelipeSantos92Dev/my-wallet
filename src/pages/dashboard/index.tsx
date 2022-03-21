import ContentHeader from 'components/ContentHeader'
import SelectInput from 'components/SelectInput'
import { Container } from './styles'

const Dashboard: React.FC = () => {
  const options = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' }
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#D6D2CB">
        <SelectInput
          options={options}
          onChange={() => {
            ;('')
          }}
        />
      </ContentHeader>
    </Container>
  )
}

export default Dashboard
