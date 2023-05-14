
import { hexToBin } from './hexToBin'
import { HASH } from './HASH'
import { CONCAT } from './CONCAT'
import { EQUAL } from './EQUAL'



const LSB = (number: number) => {
  return number % 2 === 1
}

// b.  Set merge_count to the lowest value (0 included) such that
// LSB(i >> merge_count) is not set, where LSB means the least
// significant bit.  In other words, set merge_count to the
// number of consecutive 1s found starting at the least
// significant bit of i.
const getMergeCount = (i:number) =>{
  let merge_count = 0;
  while(LSB(i>> merge_count)){
    merge_count++;
  }
  return merge_count
}

const MERGE = (stack: Uint8Array[]) => {
  const prefix = hexToBin('01')
  const right = stack.pop() as Uint8Array
  const left = stack.pop() as Uint8Array
  stack.push(HASH(CONCAT(prefix, CONCAT(left, right))))
}


export const verifyTree = (
  root: Uint8Array,
  entries: Uint8Array[],
): boolean => {
  const stack: Uint8Array[] = []
  const tree_size = entries.length
  for (let i = 0; i < tree_size; i++) {
    const prefix = hexToBin('00')
    const entry = entries[i]
    // a.  Push HASH(0x00 || entries[i]) to stack.
    stack.push(HASH(CONCAT(prefix, entry)))
    let merge_count = getMergeCount(i)
    // console.log({merge_count})
    for (let k = 0; k < merge_count; k++){
      MERGE(stack)
    }
  }

  while (stack.length > 1) {
    MERGE(stack)
  }
  const computedRoot = stack[0]
  const expectedRoot = root
  return EQUAL (computedRoot, expectedRoot)
}
