import {
  Container,
  SideLeft,
  SideRight,
  Legend,
  LegendContainer
} from './styles'
import {
  PieChart as PieReachart,
  Pie,
  ResponsiveContainer,
  Cell
} from 'recharts'

const PieChart: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Resumo</h2>
      <LegendContainer>
        <Legend color={'#034500'}>
          <div>75%</div>
          <span>Receitas</span>
        </Legend>
        <Legend color={'#7a120b'}>
          <div>25%</div>
          <span>Despesas</span>
        </Legend>
        <Legend color={'#034500'}>
          <div>75%</div>
          <span>Receitas</span>
        </Legend>
        <Legend color={'#7a120b'}>
          <div>25%</div>
          <span>Despesas</span>
        </Legend>
        <Legend color={'#034500'}>
          <div>75%</div>
          <span>Receitas</span>
        </Legend>
        <Legend color={'#7a120b'}>
          <div>25%</div>
          <span>Despesas</span>
        </Legend>
        <Legend color={'#034500'}>
          <div>75%</div>
          <span>Receitas</span>
        </Legend>
        <Legend color={'#7a120b'}>
          <div>25%</div>
          <span>Despesas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieReachart>
          <Pie data={[]} labelLine={false} dataKey={'percent'} />
        </PieReachart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
)

export default PieChart
