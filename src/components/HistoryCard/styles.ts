import styled from 'styled-components'

interface ContainerProps {
  color: string
}

interface TagProps {
  color: string
}

export const Container = styled.li<ContainerProps>`
  background-color: ${(props) => props.color};

  list-style: none;
  border-radius: 5px;

  margin: 10px;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
`

export const Tag = styled.div<TagProps>`
  /* position: absolute; */
  width: 10px;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: ${(props) => props.color};
  position: absolute;
  left: 0;
`
