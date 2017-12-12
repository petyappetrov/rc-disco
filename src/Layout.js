import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Layout = ({
  opacity,
  duration,
  deg,
  gradient,
  onTransitionEnd
}) =>
  <div
    onTransitionEnd={onTransitionEnd}
    style={{
      ...styles.layout,
      opacity: opacity,
      transitionDuration: `${duration}ms`,
      background: `linear-gradient(${deg}deg, ${gradient.colors})`
    }}
  />

Layout.propTypes = {
  onTransitionEnd: PropTypes.func,
  opacity: PropTypes.number,
  duration: PropTypes.number,
  deg: PropTypes.number,
  gradient: PropTypes.object.isRequired
}

export default Layout
