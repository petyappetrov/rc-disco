import hexToHsl from 'hex-to-hsl'

export const getRandomInt = (int) =>
  Math.floor(Math.random() * int)

export const getRandomIntInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const colorDetector = (color) => {
  const [hue, sat, lgt] = hexToHsl(color)
  if ((lgt / 100) < 0.2) {
    return 'black'
  }
  if ((lgt / 100) > 0.85) {
    return 'white'
  }
  if ((sat / 100) < 0.20) {
    return 'gray'
  }
  if (hue < 30) {
    return 'red'
  }
  if (hue < 60) {
    return 'orange'
  }
  if (hue < 90) {
    return 'yellow'
  }
  if (hue < 150) {
    return 'green'
  }
  if (hue < 210) {
    return 'cyan'
  }
  if (hue < 270 && (lgt / 100) < 0.3) {
    return 'darkblue'
  }
  if (hue < 270) {
    return 'blue'
  }
  if (hue < 320 && (lgt / 100) < 0.3) {
    return 'darkmagenta'
  }
  if (hue < 330) {
    return 'magenta'
  }
  return 'red'
}
