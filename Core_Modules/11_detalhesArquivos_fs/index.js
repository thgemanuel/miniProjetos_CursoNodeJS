const fs = require("fs");

// true
// false
// false
// 2022-09-01T18:52:27.559Z
// 17
// fs.stat("novoarquivo.txt", (err, status) => {

// false
// true
// false
// 2022-09-01T18:54:44.730Z
// 0
fs.stat("diretorio", (err, status) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(status.isFile())
  console.log(status.isDirectory());
  console.log(status.isSymbolicLink());
  console.log(status.ctime);
  console.log(status.size);
});
