import { binToHex } from './binToHex'
import { hexToBin } from './hexToBin'
import { HASH } from './HASH'
import { CONCAT } from './CONCAT'

import { leastSignificantBit } from './leastSignificantBit'

// wrong... will fail for larger values...
const getMergeCount = (number: number) => {
  let merge_count = 0
  const test = number >> merge_count
  const lsb = leastSignificantBit(test)
  return lsb
}

const merge = (stack: Uint8Array[]) => {
  const right = stack.pop() as Uint8Array
  const left = stack.pop() as Uint8Array
  stack.push(HASH(CONCAT(hexToBin('01'), CONCAT(left, right))))
}

export const verifyTree = (
  root: Uint8Array,
  entries: Uint8Array[],
): boolean => {
  const stack: Uint8Array[] = []
  for (let i = 0; i < entries.length; i++) {
    stack.push(HASH(CONCAT(hexToBin('00'), entries[i])))
    let merge_count = getMergeCount(i)
    while (merge_count > 0) {
      merge(stack)
      merge_count--
    }
  }
  while (stack.length > 1) {
    merge(stack)
  }
  const computedRoot = stack[0]
  const expectedRoot = root
  return binToHex(computedRoot) === binToHex(expectedRoot)
}
