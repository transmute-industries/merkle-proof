import {
  MTH,
  strToBin,
  PROOF,
  binToHex,
  inclusionProof,
  verifyInclusionProof,
  verifyConsistencyProof,
} from '../'

// https://datatracker.ietf.org/doc/html/rfc9162#name-merkle-consistency-proofs

const entries = []

const D: any = {}

for (let i = 0; i < 7; i++) {
  entries.push(strToBin(`d${i}`))
  D[i + 1] = entries
}

const [d0, d1, d2, d3, d4, d5, d6] = entries

// The following is a binary Merkle Tree with 7 leaves:
//             hash
//            /    \
//           /      \
//          /        \
//         /          \
//        /            \
//       k              l
//      / \            / \
//     /   \          /   \
//    /     \        /     \
//   g       h      i      j
//  / \     / \    / \     |
//  a b     c d    e f     d6
//  | |     | |    | |
// d0 d1   d2 d3  d4 d5

// The inclusion proof for d0 is [b, h, l].
const prove_d0_in_hash = inclusionProof(d0, entries)

// The inclusion proof for d2 is [d, g, l].
const prove_d2_in_hash = inclusionProof(d2, entries)

// The inclusion proof for d3 is [c, g, l].
const prove_d3_in_hash = inclusionProof(d3, entries)

// The inclusion proof for d4 is [f, j, k].
const prove_d4_in_hash = inclusionProof(d4, entries)

// The inclusion proof for d6 is [i, k].
const prove_d6_in_hash = inclusionProof(d6, entries)

describe('consistencyProof', () => {
  let hash: Uint8Array

  beforeAll(() => {
    //             hash
    //            /    \
    //           /      \
    //          /        \
    //         /          \
    //        /            \
    //       k              l
    //      / \            / \
    //     /   \          /   \
    //    /     \        /     \
    //   g       h      i      j
    //  / \     / \    / \     |
    //  a b     c d    e f     d6
    //  | |     | |    | |
    // d0 d1   d2 d3  d4 d5
    hash = MTH([d0, d1, d2, d3, d4, d5, d6])
  })

  it('hash0', async () => {
    //     hash0
    //      / \
    //     /   \
    //    /     \
    //   g       c
    //  / \      |
    //  a b      d2
    //  | |
    // d0 d1
    const hash0 = MTH([d0, d1, d2])
    const prove_d0_in_hash0 = inclusionProof(d0, [d0, d1, d2])

    // The consistency proof between hash0 and hash is PROOF(3, D[7]) = [c, d, g, l].
    const consistency_proof_v2 = PROOF(3, D[7])
    const [c, d, g, l] = consistency_proof_v2.map(binToHex)

    if (prove_d0_in_hash0) {
      const verified = verifyInclusionProof(
        hash0,
        MTH([d0]),
        prove_d0_in_hash0?.tree_size,
        prove_d0_in_hash0?.leaf_index,
        prove_d0_in_hash0?.inclusion_path,
      )
      expect(verified).toBe(true)
      if (prove_d0_in_hash) {
        const verifiedConsistency = verifyConsistencyProof(
          prove_d0_in_hash0?.tree_size,
          hash0,
          prove_d0_in_hash?.tree_size,
          hash,
          consistency_proof_v2,
        )
        expect(verifiedConsistency).toBe(true)
      }
    }

    // Non-leaf nodes c, g are used to verify hash0,
    expect(c).toBe(binToHex(prove_d3_in_hash?.inclusion_path[0]))
    expect(g).toBe(binToHex(prove_d3_in_hash?.inclusion_path[1]))

    // and non-leaf nodes d, l are additionally used to show hash is consistent with hash0.
    expect(d).toBe(binToHex(prove_d2_in_hash?.inclusion_path[0]))
    expect(l).toBe(binToHex(prove_d3_in_hash?.inclusion_path[2]))

    if (prove_d0_in_hash) {
      const verified = verifyInclusionProof(
        hash,
        MTH([d0]),
        prove_d0_in_hash?.tree_size,
        prove_d0_in_hash?.leaf_index,
        prove_d0_in_hash?.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('hash1=k', async () => {
    //    hash1=k
    //     /  \
    //    /    \
    //   /      \
    //   g       h
    //  / \     / \
    //  a b     c d
    //  | |     | |
    // d0 d1   d2 d3
    const hash1 = MTH([d0, d1, d2, d3])
    // const prove_d0_in_hash1 = inclusionProof(d0, [d0, d1, d2, d3])
    // errata.... should be [k, l]
    // The consistency proof between hash1 and hash is PROOF(4, D[7]) = [l].
    // hash can be verified using hash1=k and l.
    const consistency_proof_v2 = PROOF(4, D[7])
    const [k, l] = consistency_proof_v2.map(binToHex)
    expect(k).toBe(binToHex(hash1))
    expect(l).toBe(binToHex(prove_d3_in_hash?.inclusion_path[2]))
    const verifiedConsistency = verifyConsistencyProof(
      4,
      hash1,
      7,
      hash,
      consistency_proof_v2,
    )
    expect(verifiedConsistency).toBe(true)
  })

  it('hash2', async () => {
    //           hash2
    //           /  \
    //          /    \
    //         /      \
    //        /        \
    //       /          \
    //      k            i
    //     / \          / \
    //    /   \         e f
    //   /     \        | |
    //  g       h      d4 d5
    // / \     / \
    // a  b    c  d
    // |  |    |  |
    // d0 d1   d2 d3
    const hash2 = MTH([d0, d1, d2, d3, d4, d5])
    const consistency_proof_v2 = PROOF(6, D[7])
    // The consistency proof between hash2 and hash is PROOF(6, D[7]) = [i, j, k]. 
    const [i, j, k] = consistency_proof_v2.map(binToHex)
    // Non-leaf nodes k, i are used to verify hash2, 
    expect(i).toBe(binToHex(prove_d6_in_hash?.inclusion_path[0]))
    expect(k).toBe(binToHex(prove_d6_in_hash?.inclusion_path[1]))
    // and non-leaf node j is additionally used to show hash is consistent with hash2.
    expect(j).toBe(binToHex(prove_d4_in_hash?.inclusion_path[1]))
    const verifiedConsistency = verifyConsistencyProof(
      6,
      hash2,
      7,
      hash,
      consistency_proof_v2,
    )
    expect(verifiedConsistency).toBe(true)
  })
})
