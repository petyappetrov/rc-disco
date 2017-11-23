export const getRandomInt = (int) =>
  Math.floor(Math.random() * int)

export const getRandomIntInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min
