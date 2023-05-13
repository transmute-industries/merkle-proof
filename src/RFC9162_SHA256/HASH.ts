import crypto from 'crypto'

export const HASH = (data: Uint8Array) => {
  return new Uint8Array(crypto.createHash('sha256').update(data).digest())
}
