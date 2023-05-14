import { MTH } from './MTH'
import { CUT } from './CUT'

import { highestPowerOf2LessThanN } from './highestPowerOf2LessThanN'

const SUBPROOF = (m: number, D_n: Uint8Array[], b: boolean): Uint8Array[] => {
  const n = D_n.length
  if (m === n) {
    return [MTH(D_n)]
  }
  if (m < n) {
    const k = highestPowerOf2LessThanN(n)
    // If m <= k, the right subtree entries D[k:n] only exist in the current tree.
    if (m <= k) {
      // We prove that the left subtree entries D[0:k] are consistent
      // and add a commitment to D[k:n]:
      // SUBPROOF(m, D_n, b) = SUBPROOF(m, D[0:k], b) : MTH(D[k:n])
      const left = CUT(D_n, 0, k)
      const first = SUBPROOF(m, left, b)
      const second = MTH(CUT(D_n, k, n))
      return first.concat(second)
    } else if (m > k) {
      // If m > k, the left subtree entries D[0:k] are identical in both
      // trees.  We prove that the right subtree entries D[k:n] are consistent
      // and add a commitment to D[0:k]:
      const right = CUT(D_n, k, n)
      const first = SUBPROOF(m - k, right, false)
      const second = MTH(CUT(D_n, 0, k))
      return first.concat(second)
    }
  }
  throw new Error('m cannot be greater than n')
}
// TODO: consistency_proof_v2
export const PROOF = (m: number, D_n: Uint8Array[]) => {
  return SUBPROOF(m, D_n, true)
}
