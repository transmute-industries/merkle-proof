export const leastSignificantBit = (number: number) => {
  number &= -number
  return number
}