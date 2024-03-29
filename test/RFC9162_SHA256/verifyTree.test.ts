import api from '../../src'

const { treeHead, strToBin, verifyTree } = api.RFC9162

describe('verifyTree', () => {
  it('1', async () => {
    const entries = [strToBin('A')]
    const root = treeHead(entries)
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })

  it('2', async () => {
    const entries = [strToBin('A'), strToBin('B')]
    const root = treeHead(entries)
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })

  it('3', async () => {
    const entries = [strToBin('A'), strToBin('B'), strToBin('C')]
    const root = treeHead(entries)
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })

  it('4', async () => {
    const entries = [strToBin('A'), strToBin('B'), strToBin('C'), strToBin('D')]
    const root = treeHead(entries)
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })

  it('5', async () => {
    const entries = [
      strToBin('A'),
      strToBin('B'),
      strToBin('C'),
      strToBin('D'),
      strToBin('E'),
    ]
    const root = treeHead(entries)
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })

  it('6', async () => {
    const entries = [
      strToBin('A'),
      strToBin('B'),
      strToBin('C'),
      strToBin('D'),
      strToBin('E'),
      strToBin('F'),
    ]
    const root = treeHead(entries)
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })

  it('7', async () => {
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
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })

  it('8', async () => {
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
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
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
    const verified = verifyTree(root, entries)
    expect(verified).toBe(true)
  })
})
