export const EXACT_POWER_OF_2 = (x: number) => {
  return (Math.log(x)/Math.log(2)) % 1 === 0;
}