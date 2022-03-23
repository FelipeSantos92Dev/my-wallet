import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

import formatCurrency from 'utils/formatCurrency'

import { Container, Header, LegendContainer, Legend } from './styles'

interface HistoryBoxProps {
  data: {
    month: string
    amountEntry: number
    amountOutput: number
  }[]
  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

const HistoryBox: React.FC<HistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput
}) => (
  <Container>
    <Header>
      <h2>Histórico de Saldo</h2>
      <LegendContainer>
        <Legend color={lineColorAmountEntry}>
          <div></div>
          <span>Receitas</span>
        </Legend>

        <Legend color={lineColorAmountOutput}>
          <div></div>
          <span>Despesas</span>
        </Legend>
      </LegendContainer>
    </Header>

    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray={'3 3'} stroke={'#FFF'} />
        <XAxis dataKey={'month'} stroke={'#FFF'} />
        <Tooltip formatter={(value: number) => formatCurrency(Number(value))} />
        <Line
          type={'monotone'}
          dataKey={'amountEntry'}
          name={'Receitas'}
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type={'monotone'}
          dataKey={'amountOutput'}
          name={'Despesas'}
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
)

export default HistoryBox
