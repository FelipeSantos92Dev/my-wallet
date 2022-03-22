import { useMemo, useState } from 'react'
import ContentHeader from 'components/ContentHeader'
import SelectInput from 'components/SelectInput'
import { WalletCard } from 'components/WalletCard'

import { Container, Content } from './styles'
import listOfMonths from 'utils/months'
import expenses from 'repositories/expenses'
import MessageBox from 'components/MessageBox'
import receives from 'repositories/receives'

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

  const totalReceives = useMemo(() => {
    let total = 0

    receives.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount data')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalExpenses = useMemo(() => {
    let total = 0

    expenses.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error('Invalid amount data')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalReceives - totalExpenses
  }, [totalExpenses, totalReceives])

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Opa!',
        description: 'Neste mês o seu saldo ficou negativo!',
        footerText: 'Considere economizar em despesas secundárias!'
      }
    } else if (totalBalance == 0) {
      return {
        title: "Uffa'!",
        description: 'Neste mês você utilizou toda a sua receita!',
        footerText: 'Verifique se alguns gastos podem ser cortados!'
      }
    } else {
      return {
        title: 'Muito bem!',
        description: 'Neste mês sua carteira ficou positiva!',
        footerText: 'Considere investir o saldo!'
      }
    }
  }, [totalBalance])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch {
      throw new Error('Invalid month value')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch {
      throw new Error('Invalid year value')
    }
  }

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
          amount={totalBalance}
          footer={'atualizado'}
          color={'#161773'}
          icon={'dollar'}
        />
        <WalletCard
          title="receitas"
          amount={totalReceives}
          footer={'atualizado'}
          color={'#034500'}
          icon={'up'}
        />
        <WalletCard
          title="despesas"
          amount={totalExpenses}
          footer={'atualizado'}
          color={'#7a120b'}
          icon={'down'}
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
        />
      </Content>
    </Container>
  )
}
