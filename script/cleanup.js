"use strict";

const fs = require("fs");
const SOURCE = "src/Virgil.vfj";

let rawdata = fs.readFileSync(SOURCE);
let virgil = JSON.parse(rawdata);

for (let glyph of virgil.font.glyphs) {
  try {
    delete glyph.lastModified;
  } catch {
    //
  }
}

let data = JSON.stringify(virgil, null, 2);
fs.writeFileSync(SOURCE, data);
