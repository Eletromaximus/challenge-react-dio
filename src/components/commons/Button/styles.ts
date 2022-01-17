import styled, { css } from 'styled-components'

interface IButton {
  background?: string,
  color?: string
}

export const StyleButton = styled.button<IButton>`
  border: 0;
  padding: 0;
  margin: 0;
  
  ${({ color }) => {
    if (color) {
      return css`
        color: ${color};
      `
    } else {
      return css`
        color: #FFFFFF;
      `
    }
  }};

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
