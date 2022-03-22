import { useMemo, useState } from 'react'
import ContentHeader from 'components/ContentHeader'
import SelectInput from 'components/SelectInput'
import { WalletCard } from 'components/WalletCard'

import { Container, Content } from './styles'
import listOfMonths from 'utils/months'
import expenses from 'repositories/expenses'
import MessageBox from 'components/MessageBox'
// import receives from 'repositories/receives'

export default function Dashboard() {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  )

  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  )

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      throw new Error('Invalid month value')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch (error) {
      throw new Error('Invalid year value')
    }
  }

  const years = useMemo(() => {
    const uniqueYears: number[] = []

    expenses.forEach((item) => {
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
      <ContentHeader title="Dashboard" lineColor="#D6D2CB">
        <SelectInput
          options={months}
          defaultValue={monthSelected}
          onChange={(e) => handleMonthSelected(e.target.value)}
        />
        <SelectInput
          options={years}
          defaultValue={yearSelected}
          onChange={(e) => handleYearSelected(e.target.value)}
        />
      </ContentHeader>

      <Content>
        <WalletCard
          title="saldo"
          amount={150}
          footer={'atualizado'}
          color={'#161773'}
          icon={'dollar'}
        />
        <WalletCard
          title="receitas"
          amount={5000}
          footer={'atualizado'}
          color={'#034500'}
          icon={'up'}
        />
        <WalletCard
          title="despesas"
          amount={4850}
          footer={'atualizado'}
          color={'#7a120b'}
          icon={'down'}
        />

        <MessageBox
          title="Muito bem!"
          description="Sua carteira está positiva"
          footerText="Considere investir o seu valor!"
        />
      </Content>
    </Container>
  )
}
