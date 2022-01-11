import styled, { css } from 'styled-components'

interface IContainer {
  value: number
}

export const Container = styled.div<IContainer>`
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  
  ${({ value }) => {
    return css`
      width: ${((100 * value) / 12)}%;
    `
  }}  
`
