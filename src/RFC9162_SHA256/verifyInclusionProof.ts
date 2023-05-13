import {leastSignificantBit } from './leastSignificantBit'
import { CONCAT } from './CONCAT';
import { hexToBin } from './hexToBin';
import { HASH } from './HASH';
import { binToHex } from './binToHex'

export const verifyInclusionProof = (root_hash: Uint8Array, tree_size: number, hash: Uint8Array, leaf_index: number, inclusion_path: Uint8Array[]) => {
  if (leaf_index > tree_size){
    return false;
  }
  let fn = leaf_index;
  let sn = tree_size - 1;
  let r = hash
  for (const p of inclusion_path){
    if (sn === 0){
      return false;
    }
    const lsb = leastSignificantBit(fn)
    if (lsb || fn === sn){
      r = HASH(CONCAT(hexToBin('01'), CONCAT(p, r)))
      if (!lsb){
        while (!leastSignificantBit(fn) && fn !== 0){
          fn >>= 1
          sn >>= 1
        }
      }
    } else {
      r = HASH(CONCAT(hexToBin('01'), CONCAT(r, p)))
    }
  }
  fn >>= 1
  sn >>= 1
  return sn === 0 && binToHex(r) === binToHex(root_hash)
}