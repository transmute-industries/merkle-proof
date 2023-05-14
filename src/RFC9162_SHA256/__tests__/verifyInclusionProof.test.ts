import { strToBin, MTH, inclusionProof, verifyInclusionProof } from '../'

describe('inclusionProof', () => {
  it('1', async () => {
    expect.assertions(1)
    const entries = [strToBin('A')]
    const root = MTH(entries)
    const leaf = MTH([entries[0]])
    const proof = inclusionProof(entries[0], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('2', async () => {
    expect.assertions(1)
    const entries = [strToBin('A'), strToBin('B')]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('3', async () => {
    expect.assertions(1)
    const entries = [strToBin('A'), strToBin('B'), strToBin('C')]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('4', async () => {
    expect.assertions(1)
    const entries = [strToBin('A'), strToBin('B'), strToBin('C'), strToBin('D')]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('5', async () => {
    expect.assertions(1)
    const entries = [
      strToBin('A'),
      strToBin('B'),
      strToBin('C'),
      strToBin('D'),
      strToBin('E'),
    ]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('6', async () => {
    expect.assertions(1)
    const entries = [
      strToBin('A'),
      strToBin('B'),
      strToBin('C'),
      strToBin('D'),
      strToBin('E'),
      strToBin('F'),
    ]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('7', async () => {
    expect.assertions(1)
    const entries = [
      strToBin('A'),
      strToBin('B'),
      strToBin('C'),
      strToBin('D'),
      strToBin('E'),
      strToBin('F'),
      strToBin('G'),
    ]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })

  it('8', async () => {
    expect.assertions(1)
    const entries = [
      strToBin('A'),
      strToBin('B'),
      strToBin('C'),
      strToBin('D'),
      strToBin('E'),
      strToBin('F'),
      strToBin('G'),
      strToBin('H'),
    ]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })
  it('9', async () => {
    expect.assertions(1)
    const entries = [
      strToBin('A'),
      strToBin('B'),
      strToBin('C'),
      strToBin('D'),
      strToBin('E'),
      strToBin('F'),
      strToBin('G'),
      strToBin('H'),
      strToBin('I'),
    ]
    const root = MTH(entries)
    const leaf = MTH([entries[1]])
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf,
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })
})
