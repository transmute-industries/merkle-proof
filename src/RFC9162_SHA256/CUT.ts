export const CUT = (list: Uint8Array[], start:number, end:number) => {
  const d = [];
  while (start < end){
    d.push(list[start])
    start++;
  }
  return d
}
