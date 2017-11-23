import React from 'react'
import ReactDOM from 'react-dom'
import Disco from '../src'

import './global-styles'

ReactDOM.render(
  <Disco
    duration={{
      min: 1000,
      max: 2000
    }}
  />,
  document.getElementById('root')
)
