import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import gradients from './gradients.json'
import { getRandomInt, getRandomIntInRange } from './utils'

const Gradient = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Layout = styled.div`
  transition-property: opacity;
  transition-duration: ${p => p.duration}ms;
  transition-timing-function: linear;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${p => `
    linear-gradient(
      ${p.deg}deg,
      ${p.gradient.colors[0]} 0%,
      ${p.gradient.colors[1]} 100%
    );
  `}
  opacity: ${p => p.opacity};
`

class Disco extends React.Component {
  static propTypes = {
    duration: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number
    })
  }

  static defaultProps = {
    duration: {
      min: 2000,
      max: 5000
    }
  }

  constructor (props) {
    super(props)
    this.gradients = gradients
    this.state = {
      front: this.getGradient(),
      back: this.getGradient(),
      opacity: 1
    }
  }

  componentDidMount () {
    this.start()
    ReactDOM.findDOMNode(this.front).addEventListener('transitionend', this.nextGradient)
  }

  componentWillUnmount () {
    ReactDOM.findDOMNode(this.front).removeEventListener('transitionend', this.nextGradient)
  }

  start = () => {
    setTimeout(() => this.nextGradient(), 0)
  }

  nextGradient = () => {
    this.setState(state => {
      if (state.opacity) {
        return {
          back: this.getGradient(),
          opacity: 0
        }
      }
      return {
        front: this.getGradient(),
        opacity: 1
      }
    })
  }

  getGradient = () => {
    if (!this.gradients.length) {
      this.gradients = gradients
    }
    const gradient = this.gradients[getRandomInt(this.gradients.length)]
    const duration = getRandomIntInRange(this.props.duration.min, this.props.duration.max)
    const deg = getRandomInt(360)

    this.gradients = this.gradients.filter(g => g.name !== gradient.name)

    return {
      gradient,
      duration,
      deg
    }
  }

  render () {
    const { back, front, opacity } = this.state
    return (
      <Gradient>
        <Layout {...back} />
        <Layout
          {...front}
          ref={el => (this.front = el)}
          opacity={opacity}
        />
      </Gradient>
    )
  }
}

export default Disco
