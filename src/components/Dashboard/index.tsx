import { useMemo, useState } from 'react'
import ContentHeader from 'components/ContentHeader'
import SelectInput from 'components/SelectInput'
import { WalletCard } from 'components/WalletCard'

import { Container, Content } from './styles'
import listOfMonths from 'utils/months'
import expenses from 'repositories/expenses'
import MessageBox from 'components/MessageBox'
import receives from 'repositories/receives'
import PieChart from 'components/PieChart'
import HistoryBox from 'components/HistoryBox'

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
    } else if (totalBalance === 0) {
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

  const difference = useMemo(() => {
    const total = totalReceives + totalExpenses

    if (totalReceives === 0 && totalExpenses === 0) {
      const data = [
        {
          name: 'Receitas',
          value: 0,
          percent: 0,
          color: '#034500'
        },
        {
          name: 'Despesas',
          value: 0,
          percent: 0,
          color: '#7A120B'
        }
      ]
      return data
    }

    const receivesPercent = (totalReceives / total) * 100
    const expensesPercent = (totalExpenses / total) * 100

    const data = [
      {
        name: 'Receitas',
        value: totalReceives,
        percent: Number(receivesPercent.toFixed(1)),
        color: '#034500'
      },
      {
        name: 'Despesas',
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(1)),
        color: '#7A120B'
      }
    ]
    return data
  }, [totalExpenses, totalReceives])

  const historyData = useMemo(() => {
    return listOfMonths
      .map((_, month) => {
        let amountEntry = 0
        receives.forEach((receive) => {
          const date = new Date(receive.date)
          const receiveMonth = date.getMonth()
          const receiveYear = date.getFullYear()

          if (receiveMonth === month && receiveYear === yearSelected) {
            try {
              amountEntry += Number(receive.amount)
            } catch {
              throw new Error('Amount data is invalid!')
            }
          }
        })

        let amountOutput = 0
        expenses.forEach((expense) => {
          const date = new Date(expense.date)
          const expenseMonth = date.getMonth()
          const expenseYear = date.getFullYear()

          if (expenseMonth === month && expenseYear === yearSelected) {
            try {
              amountOutput += Number(expense.amount)
            } catch {
              throw new Error('Amount data is invalid!')
            }
          }
        })

        return {
          monthNumber: month,
          month: listOfMonths[month].slice(0, 3),
          amountEntry,
          amountOutput
        }
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth()
        const currentYear = new Date().getFullYear()

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear
        )
      })
  }, [yearSelected])

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
          color={'#7A120B'}
          icon={'down'}
        />

        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
        />

        <PieChart data={difference} />

        <HistoryBox
          data={historyData}
          lineColorAmountEntry={'#22BABB'}
          lineColorAmountOutput={'#F24405'}
        />
      </Content>
    </Container>
  )
}
