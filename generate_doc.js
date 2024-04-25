#!/usr/bin/env node
const JsonSchemaStaticDocs = require("json-schema-static-docs");

const fs = require('fs');
const dataFolder = "./schema";
fs.readdirSync(dataFolder).forEach((file) => {
    console.log(`\x1b[0;33mWARNING\x1b[0m file '${file}' found`);
  });

(async () => {
  let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    inputPath: "./schema",
    outputPath: "./docs",
    ajvOptions: {
      allowUnionTypes: true,
    },
    enableMetaEnum: true,
    createIndex: false
  });
  await jsonSchemaStaticDocs.generate();
  console.log("Documents generated.");
})();