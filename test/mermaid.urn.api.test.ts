import fs from "fs";
import merkle from "../src";

const members = ["0", "1", "2", "3", "4", "5", "6", "7"].map(Buffer.from);
const seed = Buffer.from("hello");
const salts = merkle.salt.from(members, seed);

describe("merkle mermaid urn", () => {
  it("various diagrams", () => {
    const urnTree = merkle.urn.create({ members, salts });
    const m0 = merkle.mermaid.urn({ urn: urnTree });
    const urnProof = merkle.urn.reveal({ urn: urnTree, reveal: [3] });
    const m1 = merkle.mermaid.urn({ urn: urnProof });
    const m2 = merkle.mermaid.urn({
      urn: urnTree,
      value: members[3],
      salt: salts[3]
    });
    const m3 = merkle.mermaid.urn({
      urn: urnProof,
      value: members[3],
      salt: salts[3]
    });
    const file = `# Merkle Mermaid URN
    
# Tree
\`\`\`
${urnTree}
\`\`\`
${m0}
# Proof
\`\`\`
${urnProof}
\`\`\`
${m1}
# Tree with Member
${m2}
# Proof with Member
${m3}
`;
    fs.writeFileSync("./test/mermaid.urn.md", file);
  });
});
