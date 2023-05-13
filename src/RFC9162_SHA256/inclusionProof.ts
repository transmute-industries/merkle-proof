import { PATH} from './PATH'

export const inclusionProof = (entry: Uint8Array, entries: Uint8Array[]) => {
  const m = entries.indexOf(entry)
  if (m === -1){
    return null
  }
  return PATH(m, entries)
}