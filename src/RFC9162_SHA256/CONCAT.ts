export const CONCAT = (a1: Uint8Array, a2: Uint8Array): Uint8Array => {
  // sum of individual array lengths
  var mergedArray = new Uint8Array(a1.length + a2.length)
  mergedArray.set(a1)
  mergedArray.set(a2, a1.length)
  return mergedArray
}
