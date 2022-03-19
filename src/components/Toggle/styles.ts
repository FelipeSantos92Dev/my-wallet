import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: medium;
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.warning,
    offColor: theme.colors.danger
  })
)<ReactSwitchProps>`
  margin: 0 8px;
`
