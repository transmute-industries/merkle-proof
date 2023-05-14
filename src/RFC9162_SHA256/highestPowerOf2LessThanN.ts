

export const highestPowerOf2LessThanN = (n: number) =>{
  let k = 0;
  if (Math.pow(2, k) >= n){
    return k
  } else {
    while(Math.pow(2, k) < n){
      k = k + 1;
    }
  }
  if (Math.pow(2, k) >= n){
    k = k-1;
  }
  return Math.pow(2, k)
}

