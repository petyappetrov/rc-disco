import React from 'react'
import ReactDOM from 'react-dom'
import Disco from '../src'

import './global-styles'

ReactDOM.render(
  <Disco
    duration={{
      min: 500,
      max: 1000
    }}
  />,
  document.getElementById('root')
)
