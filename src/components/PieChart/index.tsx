import {
  Container,
  SideLeft,
  SideRight,
  Legend,
  LegendContainer
} from './styles'
import {
  PieChart as PieRechart,
  Pie,
  ResponsiveContainer,
  Cell
} from 'recharts'

interface PieChartProps {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

const PieChart: React.FC<PieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Resumo</h2>
      <LegendContainer>
        {data.map((indicator) => (
          <Legend key={indicator.name} color={indicator.color}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <PieRechart>
          <Pie data={data} labelLine={false} dataKey={'percent'}>
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieRechart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
)

export default PieChart
