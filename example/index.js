import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Disco from '../src'

import './global-styles'

const Sliders = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`

const Text = styled.div`
  font-size: 42px;
  text-transform: uppercase;
  font-wieght: bold;
`

const InputRange = ({ label, onChange, value }) =>
  <div>
    <div>
      <label htmlFor={label}>{label}: ({value}ms)</label>
    </div>
    <div>
      <input
        id={label}
        type='range'
        min='100'
        max='10000'
        step='100'
        onChange={onChange}
        value={value}
      />
    </div>
  </div>

InputRange.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.number
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      min: 500,
      max: 1000
    }
  }

  onChangeMin = (e) => {
    const value = parseInt(e.target.value, 10)
    if (value < this.state.max) {
      this.setState({
        min: value
      })
    }
  }

  onChangeMax = (e) => {
    const value = parseInt(e.target.value, 10)
    if (value > this.state.min) {
      this.setState({
        max: value
      })
    }
  }

  render () {
    return (
      <Disco
        duration={{
          min: this.state.min,
          max: this.state.max
        }}
        palletes={[
          'black',
          'orange',
          'blue',
          'magenta'
        ]}
      >
        <Sliders>
          <Text>Disco</Text>
          <br />
          <br />
          <InputRange
            label='min'
            onChange={this.onChangeMin}
            value={this.state.min}
          />
          <br />
          <InputRange
            label='max'
            onChange={this.onChangeMax}
            value={this.state.max}
          />
        </Sliders>
      </Disco>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
