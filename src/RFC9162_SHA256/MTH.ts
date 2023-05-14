
import { HASH } from './HASH'
import { CONCAT } from './CONCAT'

import { hexToBin } from './hexToBin'
import { strToBin } from './strToBin'

import { highestPowerOf2LessThanN } from './highestPowerOf2LessThanN'

const EMPTY_STRING = strToBin('')

const cut = (list: Uint8Array[], start:number, end:number) => {
  const d = [];
  while (start < end){
    d.push(list[start])
    start++;
  }
  return d
}

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
  const left = cut(entries, 0, k)
  const right = cut(entries, k, n)
  const prefix = hexToBin('01')
  return HASH(CONCAT(prefix, CONCAT(MTH(left), MTH(right))))
}
