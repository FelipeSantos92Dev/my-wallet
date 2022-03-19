import ContentHeader from 'components/ContentHeader'
import HistoryCard from 'components/HistoryCard'
import SelectInput from 'components/SelectInput'
import { Container, Content } from './styles'

const List: React.FC = () => {
  const options = [
    { value: 'Felipe', label: 'Felipe' },
    { value: 'Karen', label: 'Karen' },
    { value: 'Teste', label: 'Teste' }
  ]

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#FFF">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
          tagColor="#D6D2CB"
          title="Conta de Luz"
          subtitle="19/03/2022"
          amount="R$ 170"
        />
        <HistoryCard
          cardColor="#164773"
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
