import { injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

export default injectGlobal`
  ${styledNormalize}
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
  *,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
