
import { MTH } from "./MTH"
import { CUT } from "./CUT";
// import { EQUAL } from "./EQUAL";

import { highestPowerOf2LessThanN } from "./highestPowerOf2LessThanN"

const SUBPROOF = (m: number, D_n: Uint8Array[], b: boolean, first_tree_hash: Uint8Array): Uint8Array[] => {
  const n = D_n.length
  if (b){
    return []
  }
  if (m === n){
    return [first_tree_hash]
  }
  if (m < n){
    const k = highestPowerOf2LessThanN(n);
    // If m <= k, the right subtree entries D[k:n] only exist in the current tree.
    if (m <= k){
      // We prove that the left subtree entries D[0:k] are consistent
      // and add a commitment to D[k:n]:
      // SUBPROOF(m, D_n, b) = SUBPROOF(m, D[0:k], b) : MTH(D[k:n])
      const left = CUT(D_n, 0 ,k)
      const first = SUBPROOF(m, left, b, first_tree_hash)
      const second = MTH(CUT(D_n,k,n ))
      return first.concat(second)
    } else if (m > k){
      // If m > k, the left subtree entries D[0:k] are identical in both
      // trees.  We prove that the right subtree entries D[k:n] are consistent
      // and add a commitment to D[0:k]:
      const right = CUT(D_n, k ,n)
      const first = SUBPROOF(m-k, right, false, first_tree_hash)
      const second = MTH(CUT(D_n,0,k ))
      return first.concat(second)
    }
  }
  throw new Error('m cannot be greater than n')
 
}
// TODO: consistency_proof_v2
export const consistencyProof = (newEntries: Uint8Array[], first_tree_size: number, first_tree_hash: Uint8Array ) => {
  const b = newEntries.length === first_tree_size
  const m = first_tree_size
  const consistency_path = SUBPROOF(m, newEntries, b, first_tree_hash)

  return { 
    consistency_path 
  }
}