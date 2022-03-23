import styled from 'styled-components'

interface LegendProps {
  color: string
}

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 7px;
`
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  > h2 {
    margin-bottom: 20px;
    padding-left: 16px;
  }
`

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
  padding-right: 16px;
`

export const Legend = styled.li<LegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  margin-left: 10px;

  > div {
    background-color: ${(props) => props.color};
    width: 30px;
    height: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    line-height: 10px;
    text-align: center;
  }

  > span {
    margin-left: 5px;
  }
`
