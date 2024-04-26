#!/usr/bin/env node
const JsonSchemaStaticDocs = require("json-schema-static-docs");

const fs = require('fs');
const dataFolder = "./schema";
fs.readdirSync(dataFolder).forEach((file) => {
    console.log(`\x1b[0;33mWARNING\x1b[0m file '${file}' found`);
  });

(async () => {
  let jsonSchemaStaticDocs = new JsonSchemaStaticDocs({
    inputPath: ".",
    outputPath: "./docs",
    enableMetaEnum: true,
    ajvOptions: {
      allowUnionTypes: true,
    },
    createIndex: false
  });
  await jsonSchemaStaticDocs.generate();
  console.log("Documents generated.");
 
  try {
    let fileContent = fs.readFileSync('./docs/verona-module-metadata.md', 'utf8');
    fileContent = fileContent.replace('```', '\n:::{.column-page}\n```json') + '\n:::';
    fileContent = fileContent.replace(/^.+<table>/ms, '---\ntitle: Metadata Specification\n---\n\n<table>');
    fileContent = fileContent.replace('>$id', '>\\$id');
    fileContent = fileContent.replace('^[', '\\^[');
    
    fs.writeFileSync('./docs/verona-module-metadata.qmd', fileContent);
  } catch (err) {
    console.error(err);
  }
})();
