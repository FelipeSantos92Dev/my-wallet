import { useState, useEffect, useMemo } from 'react'

import ContentHeader from 'components/ContentHeader'
import HistoryCard from 'components/HistoryCard'
import SelectInput from 'components/SelectInput'
import { Container, Content, Filters } from './styles'
import receives from 'repositories/receives'
import formatCurrency from 'utils/formatCurrency'
import formatDate from 'utils/formatDate'
import listOfMonths from 'utils/months'

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
  const [selectedFrequency, setSelectedFrequency] = useState([
    'recorrente',
    'eventual'
  ])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      (item) => item === frequency
    )

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter((item) => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency((prev) => [...prev, frequency])
    }
  }

  useEffect(() => {
    const filteredData = receives.filter((item) => {
      const date = new Date(item.date)
      const month = String(date.getMonth() + 1)
      const year = String(date.getFullYear())

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      )
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
  }, [monthSelected, yearSelected, selectedFrequency])

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  const years = useMemo(() => {
    const uniqueYears: number[] = []

    receives.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year
      }
    })
  }, [])

  return (
    <Container>
      <ContentHeader title="Receitas" lineColor="#AAFF00">
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
        <button
          type="button"
          className={`tag-filter recurrent ${
            selectedFrequency.includes('recorrente') && 'tag-actived'
          }`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter eventual ${
            selectedFrequency.includes('eventual') && 'tag-actived'
          }`}
          onClick={() => handleFrequencyClick('eventual')}
        >
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
