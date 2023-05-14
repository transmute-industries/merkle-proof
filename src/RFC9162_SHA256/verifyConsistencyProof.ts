import { HASH } from "./HASH";
import { CONCAT } from "./CONCAT";
import { hexToBin } from "./hexToBin";
import { LSB } from './LSB'
import { EQUAL } from "./EQUAL";

const prefix  = hexToBin('01')

import {EXACT_POWER_OF_2 } from './EXACT_POWER_OF_2'
import { ConsistencyProofDataV2 } from "./consistencyProof";
const VERIFY_PROOF = (
  first_tree_size: number,
  first_tree_hash: Uint8Array,
  second_tree_size: number,
  second_tree_hash: Uint8Array,
  consistency_path: Uint8Array[],
) => {

  // 1.  If consistency_path is an empty array, stop and fail the proof verification.
  if (consistency_path.length === 0){
    return false;
  }

  // 2.  If first is an exact power of 2, then prepend first_hash to the consistency_path array.
  if (EXACT_POWER_OF_2(first_tree_size)){
    // hmm erata?
    // consistency_proof_v2.unshift(first_tree_hash)
  }

  let fn = first_tree_size -1
  let sn = second_tree_size -1

  // 4.  If LSB(fn) is set, then right-shift both fn and sn equally until LSB(fn) is not set.
  while(LSB(fn)){
    fn = fn >> 1
    sn = sn >> 1
  }

  // Set both fr and sr to the first value in the consistency_path array.
  let fr = consistency_path[0]
  let sr = consistency_path[0]

  // 6.  For each subsequent value c in the consistency_path array:
  for (let i = 1; i < consistency_path.length; i ++){
    const c = consistency_path[i];
    // a.  If sn is 0, then stop the iteration and fail the proof
    //        verification.
    if (sn === 0){
      return false
    }
    // If LSB(fn) is set, or if fn is equal to sn, then:
    if ( LSB(fn) || fn === sn ){
      // i.    Set fr to HASH(0x01 || c || fr).
      fr = HASH(CONCAT(prefix, CONCAT(c, fr )))
      // ii.   Set sr to HASH(0x01 || c || sr).
      sr = HASH(CONCAT(prefix, CONCAT(c, sr )))
      // iii.  If LSB(fn) is not set, then right-shift both fn and sn
      //            equally until either LSB(fn) is set or fn is 0.
      while(!LSB(fn) && fn !== 0){
        fn = fn >> 1
        sn = sn >> 1
      }
    } else {
      // Otherwise:
      // i.  Set sr to HASH(0x01 || sr || c).
      sr = HASH(CONCAT(prefix, CONCAT(sr, c)))
    }
    fn = fn >> 1
    sn = sn >> 1
  }

  const fr_is_first_hash = EQUAL(fr, first_tree_hash)
  const sr_is_second_hash = EQUAL(sr, second_tree_hash)
  const sn_is_zero = sn === 0;

  return sn_is_zero &&  fr_is_first_hash && sr_is_second_hash
}


export const verifyConsistencyProof = ( hash1: Uint8Array, hash2: Uint8Array, proof: ConsistencyProofDataV2) =>{
  return VERIFY_PROOF(proof.tree_size_1, hash1, proof.tree_size_2, hash2, proof.consistency_path)
}