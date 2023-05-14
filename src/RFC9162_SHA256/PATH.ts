
import {MTH} from './MTH'

import { highestPowerOf2LessThanN } from './highestPowerOf2LessThanN'

export const PATH = (m: number, D_n: Uint8Array[]): Uint8Array[] => {
  const n = D_n.length
  if (n === 1 && m === 0){
    return []
  }
  const k = highestPowerOf2LessThanN(n)
  if (m < k) {
    const first = PATH(m, D_n.slice(0, k)) // PATH(m, D[0:k])
    const second = MTH(D_n.slice(k, n)) // MTH(D[k:n])
    return first.concat(second)
  } 
  // m >= k
  const first = PATH(m-k, D_n.slice(k, n)) // PATH(m - k, D[k:n])
  const second = MTH(D_n.slice(0, k)) // MTH(D[0:k])
  return first.concat(second)
}