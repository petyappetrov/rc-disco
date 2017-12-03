import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Layout = ({
  opacity,
  layoutRef,
  duration,
  deg,
  gradient
}) =>
  <div
    ref={layoutRef}
    style={{
      ...styles.layout,
      opacity: opacity,
      transitionDuration: `${duration}ms`,
      background: `linear-gradient(${deg}deg, ${gradient.colors})`
    }}
  />

Layout.propTypes = {
  layoutRef: PropTypes.func,
  opacity: PropTypes.number,
  duration: PropTypes.number,
  deg: PropTypes.number,
  gradient: PropTypes.object.isRequired
}

export default Layout
