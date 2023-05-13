export const hexToBin = (hexString: string) =>
  Uint8Array.from(
    (hexString as any).match(/.{1,2}/g).map((byte: any) => parseInt(byte, 16)),
  )