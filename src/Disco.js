import React from 'react'
import styled from 'styled-components'
import gradients from './gradients.json'
import { getRandomNumber } from './utils'

// TODO: Change color after some delay
// Example https://petyappetrov.github.io

const Gradient = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &::after {
    content: '';
    transition: background 300ms linear;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${p => `
      linear-gradient(
        ${p.angle}deg,
        ${p.gradient.colors[0]} 0%,
        ${p.gradient.colors[1]} 100%
      );
    `}
  }
`

const Disco = () =>
  <Gradient
    gradient={gradients[getRandomNumber(gradients.length)]}
    angle={getRandomNumber(360)}
  />

export default Disco
