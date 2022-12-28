import fs from "fs";

import JsonMerkleTree from "../src/json-representation";
import MerkleMermaid from "../src/mermaid-representation";

it("view a full tree as inclusion proofs", () => {
  const members = ["0", "1", "2", "3", "4", "5", "6", "7"].map(Buffer.from);
  const fullTreeObject = JsonMerkleTree.from(members);
  const targetMember = members[3];
  const mermaidView = MerkleMermaid.inclusionProof(
    fullTreeObject,
    targetMember
  );
  fs.writeFileSync(
    "./test/inclusion.proof.no-salt.mermaid.md",
    mermaidView
  );
});
