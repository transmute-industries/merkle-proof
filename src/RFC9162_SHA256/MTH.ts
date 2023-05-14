
import { HASH } from './HASH'
import { CONCAT } from './CONCAT'

import { hexToBin } from './hexToBin'
import { strToBin } from './strToBin'

import { highestPowerOf2LessThanN } from './highestPowerOf2LessThanN'

import { CUT } from './CUT'

const EMPTY_STRING = strToBin('')

export const MTH = (entries: Uint8Array[]): Uint8Array => {
  const n = entries.length
  if (n === 0) {
    return HASH(EMPTY_STRING)
  }
  if (n === 1) {
    const prefix = hexToBin('00')
    return HASH(CONCAT(prefix, entries[0]))
  }
  const k = highestPowerOf2LessThanN(n)
  // console.log({k, n})
  const left = CUT(entries, 0, k)
  const right = CUT(entries, k, n)
  const prefix = hexToBin('01')
  return HASH(CONCAT(prefix, CONCAT(MTH(left), MTH(right))))
}
