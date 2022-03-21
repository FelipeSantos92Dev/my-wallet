import { useState, useEffect } from 'react'

import ContentHeader from 'components/ContentHeader'
import HistoryCard from 'components/HistoryCard'
import SelectInput from 'components/SelectInput'
import { Container, Content, Filters } from './styles'
import receives from 'repositories/receives'
import formatCurrency from 'utils/formatCurrency'
import formatDate from 'utils/formatDate'

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
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  )
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  )

  useEffect(() => {
    const filteredData = receives.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return month === monthSelected && year === yearSelected
    })

    const formattedData = filteredData.map((item) => {
      return {
        id: String(Math.random() * 10),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'eventual' ? '#FEA' : '#AEF'
      }
    })
    setData(formattedData)
  }, [monthSelected, yearSelected])

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
      <ContentHeader title="Despesas" lineColor="#AAFF00">
        <SelectInput
          options={months}
          defaultValue={monthSelected}
          onChange={(e) => setMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          defaultValue={yearSelected}
          onChange={(e) => setYearSelected(e.target.value)}
        />
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
