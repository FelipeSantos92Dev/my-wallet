import ContentHeader from 'components/ContentHeader'
import HistoryCard from 'components/HistoryCard'
import SelectInput from 'components/SelectInput'
import { Container, Content, Filters } from './styles'
import expenses from 'repositories/expenses'
import { useState, useEffect } from 'react'

interface DataProps {
  id: string
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

const List: React.FC = () => {
  const [data, setData] = useState<DataProps[]>([])

  useEffect(() => {
    const response = expenses.map((item) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormatted: item.amount,
        frequency: item.frequency,
        dateFormatted: item.date,
        tagColor: item.frequency === 'eventual' ? '#FEA' : '#AEF'
      }
    })
    setData(response)
  }, [])

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
      <ContentHeader title="Despesas" lineColor="#F23005">
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
        {data.map((item) => (
          <HistoryCard
            key={item.id}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
            tagColor={item.tagColor}
          />
        ))}
      </Content>
    </Container>
  )
}

export default List
