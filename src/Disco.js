import React from 'react'
import PropTypes from 'prop-types'
import Layout from './Layout'
import styles from './styles'
import gradients from '../gradients.json'
import { getRandomInt, getRandomIntInRange, colorDetector } from './utils'

class Disco extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    duration: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number
    }),
    palletes: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    duration: {
      min: 2000,
      max: 5000
    },
    palletes: null
  }

  constructor (props) {
    super(props)
    this.gradients = this.generateGradients()
    this.state = {
      front: this.getGradient(),
      back: this.getGradient(),
      opacity: 0
    }
  }

  componentDidMount () {
    setTimeout(this.nextGradient, 0)
  }

  generateGradients = () => {
    const { palletes } = this.props
    if (palletes) {
      return gradients.filter(gradient =>
        gradient.colors.some(color => palletes.includes(colorDetector(color)))
      )
    }
    return gradients
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
      this.gradients = this.generateGradients()
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
      <div style={styles.overlay}>
        <Layout
          gradient={back.gradient}
          deg={back.deg}
        />
        <Layout
          gradient={front.gradient}
          deg={front.deg}
          duration={front.duration}
          onTransitionEnd={this.nextGradient}
          opacity={opacity}
        />
        {this.props.children &&
          <div style={{ position: 'relative' }}>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

export default Disco
