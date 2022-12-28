import fs from "fs";

import BinaryMerkleTree from "../src/binary-merkle-tree";
import JsonMerkleTree from "../src/json-representation";
import MerkleMermaid from "../src/mermaid-representation";

const list: Buffer[] = Array.from({ length: 23 }, (_x, i) =>
  Buffer.from(`${i}`)
);

it("very large", () => {
  const seed = Buffer.from("hello");
  const salts = BinaryMerkleTree.getSaltsForMembers(list, seed);
  const fullTreeObject = JsonMerkleTree.from(list, { salts });

  const valid1 = JsonMerkleTree.validate(fullTreeObject);
  expect(valid1).toBe(true);

  const targetIndex = 14;
  const targetMember = list[targetIndex];
  const targetSalt = salts[targetIndex];

  const mermaidView = MerkleMermaid.inclusionProof(
    fullTreeObject,
    targetMember,
    targetSalt
  );

  fs.writeFileSync("./test/large.proof.mermaid.md", mermaidView);
});
