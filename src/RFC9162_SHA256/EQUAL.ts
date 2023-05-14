export const EQUAL = (first: Uint8Array, second: Uint8Array) =>
    first.length === second.length && first.every((value, index) => value === second[index]);
