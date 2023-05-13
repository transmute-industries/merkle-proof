
import { HASH } from './HASH'
import { CONCAT } from './CONCAT'

import { hexToBin } from './hexToBin'
import { strToBin } from './strToBin'
import { largestPowerOf2SmallerThan } from './largestPowerOf2SmallerThan'

const EMPTY_STRING = strToBin('')

export const MTH = (entries: Uint8Array[]): Uint8Array => {
  const n = entries.length
  if (n === 0) {
    return HASH(EMPTY_STRING)
  }
  if (n === 1) {
    return HASH(CONCAT(hexToBin('00'), entries[0]))
  }
  const k = largestPowerOf2SmallerThan(n)
  const left = entries.slice(0, k - 1)
  const right = entries.slice(k - 1, n)
  return HASH(CONCAT(hexToBin('01'), CONCAT(MTH(left), MTH(right))))
}
