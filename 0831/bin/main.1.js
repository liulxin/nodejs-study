#! /usr/bin/env node

const fs = require("fs");

/**
 *
 * @param {string} src
 * @param {string} dst
 */
function copy(src, dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function main(argv) {
  copy(argv[0],argv[1]);
}

main(process.argv.slice(2)); //node ./bin/main.js ./test/test.js ./test/test_copy.js
