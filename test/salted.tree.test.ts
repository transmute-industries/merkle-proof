import fs from "fs";
import MerkleUrn from "../src/urn-representation";
import { getSaltsForMembers } from "../src/binary-merkle-tree/getSaltsForMembers";

const seed = Buffer.from("hello");
const members = ["0", "1", "2", "3", "4", "5", "6", "7"].map(Buffer.from);
const salts = getSaltsForMembers(members, seed);

it("salted merkle tree as urn", () => {
  const treeUrn = MerkleUrn.from(members, salts);
  const valid1 = MerkleUrn.validate(treeUrn);
  expect(valid1).toBe(true);

  const proofUrn = MerkleUrn.reveal(treeUrn, [3]);
  const valid2 = MerkleUrn.validate(proofUrn);
  expect(valid2).toBe(true);

  fs.writeFileSync(
    "./test/salted.tree.json",
    JSON.stringify({ treeUrn, proofUrn }, null, 2)
  );
});
