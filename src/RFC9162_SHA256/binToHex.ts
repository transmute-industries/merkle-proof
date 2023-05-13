export const binToHex = (bytes: any) =>
  bytes.reduce(
    (str: string, byte: any) => str + byte.toString(16).padStart(2, '0'),
    '',
  )
