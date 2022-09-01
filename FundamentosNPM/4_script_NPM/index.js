const _ = require("lodash");
const chalk = require("chalk");

const a = [1, 2, 3];
const b = [2, 3, 4];

// obtem os elementos que estao em a diferentes dos elementos que estao em b
const diff = _.difference(a, b);

// 1
console.log(chalk.red.bold(diff));
