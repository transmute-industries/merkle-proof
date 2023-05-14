
import api from '../../src'

const { strToBin, binToHex, inclusionProof } = api.RFC9162


describe('inclusionProof', () => {
  it('1', async () => {
    const entries = [strToBin('A')]
    const proof = inclusionProof(entries[0], entries)
    expect(proof?.leaf_index).toBe(0)
    expect(proof?.tree_size).toBe(1)
    expect(proof?.inclusion_path).toEqual([])
  })

  it('2', async () => {
    const entries = [strToBin('A'), strToBin('B')]
    const proof = inclusionProof(entries[0], entries)
    expect(proof?.leaf_index).toBe(0)
    expect(proof?.tree_size).toBe(2)
    expect(proof?.inclusion_path.map(binToHex)).toEqual([
      '87afe6086fe4571e37657e76281301f189c75ebae1d2eaafb56d578067a1d95e',
    ])
  })

  it('3', async () => {
    const entries = [strToBin('A'), strToBin('B'), strToBin('C')]
    const proof = inclusionProof(entries[0], entries)
    expect(proof?.leaf_index).toBe(0)
    expect(proof?.tree_size).toBe(3)
    expect(proof?.inclusion_path.map(binToHex)).toEqual([
      '87afe6086fe4571e37657e76281301f189c75ebae1d2eaafb56d578067a1d95e',
      'b563a5e69628743929eddec0ccfeb0745c39577e12a72e84915edd6633cb97f2',
    ])
  })
})
