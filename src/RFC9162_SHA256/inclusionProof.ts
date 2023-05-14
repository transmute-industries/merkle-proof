import { EQUAL } from './EQUAL'
import { PATH } from './PATH'

export const inclusionProof = (entry: Uint8Array, entries: Uint8Array[]) => {
  const m = entries.findIndex((value) => {
    return EQUAL(value, entry)
  })
  if (m === -1) {
    return null
  }
  return {
    tree_size: entries.length,
    leaf_index: m,
    inclusion_path: PATH(m, entries),
  }
}
