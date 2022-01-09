import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`
export default GlobalStyle
