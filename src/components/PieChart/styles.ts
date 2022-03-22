import styled from 'styled-components'

interface LegendProps {
  color: string
}

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  display: flex;
`

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`

export const LegendContainer = styled.ul`
  list-style: none;
  height: 180px;
  padding-right: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`

export const Legend = styled.li<LegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  > div {
    background-color: ${(props) => props.color};
    width: 50px;
    height: 50px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
  }

  > span {
    margin-left: 5px;
  }
`
