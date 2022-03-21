import ContentHeader from 'components/ContentHeader'
import HistoryCard from 'components/HistoryCard'
import SelectInput from 'components/SelectInput'
import { Container, Content, Filters } from './styles'
import receives from 'repositories/receives'

const List: React.FC = () => {
  const months = [
    { value: 1, label: 'Janeiro' },
    { value: 2, label: 'Fevereiro' },
    { value: 3, label: 'Março' }
  ]

  const years = [
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 }
  ]

  return (
    <Container>
      <ContentHeader title="Receitas" lineColor="#89D99D">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter eventual">
          Eventuais
        </button>
      </Filters>

      <Content>
        <HistoryCard
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
      </Content>
    </Container>
  )
}

export default List
