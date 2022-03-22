import styled from 'styled-components'

interface ContainerProps {
  color: string
}

export const Container = styled.div<ContainerProps>`
  width: 32%;
  height: 150px;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px 20px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};

  position: relative;
  overflow: hidden;

  > div {
    position: absolute;
    height: 110%;
    top: -2px;
    right: -40px;
    opacity: 0.3;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;
  }
`
