
import api from '../../src'

const { strToBin, leaf, treeHead, inclusionProof, verifyInclusionProof } = api.RFC9162

describe('inclusionProof', () => {
  it('1', async () => {
    expect.assertions(1)
    const entries = [strToBin('A')]
    const root = treeHead(entries)
    const proof = inclusionProof(entries[0], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[0]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
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
    const root = treeHead(entries)
    const proof = inclusionProof(entries[1], entries)
    if (proof) {
      const verified = verifyInclusionProof(
        root,
        leaf(entries[1]),
        proof.tree_size,
        proof.leaf_index,
        proof.inclusion_path,
      )
      expect(verified).toBe(true)
    }
  })
})
