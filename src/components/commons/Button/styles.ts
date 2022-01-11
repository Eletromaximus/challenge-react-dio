import styled, { css } from 'styled-components'

interface IButton {
  background?: string,
}

export const StyleButton = styled.button<IButton>`
  border: 0;
  color: #FFFFFF;
  padding: 0;
  margin: 0;

  ${({ background }) => {
    if (background) {
      return css`
        background-color: ${background};
      `
    } else {
      return css`
        background-color: transparent;
      `
    }
  }}
`
