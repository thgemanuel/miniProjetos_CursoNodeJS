const url = require("url");
const address = "https://www.sitecursoudemy.com.br/catalog?produtos=cadeira";
const parseUrl = new url.URL(address);

console.log(parseUrl.host); // www.sitecursoudemy.com.br;
console.log(parseUrl.pathname); // /catalog
console.log(parseUrl.search); // ?produtos=cadeira
console.log(parseUrl.searchParams); // URLSearchParams { 'produtos' => 'cadeira' }
console.log(parseUrl.searchParams.get("produtos")); // cadeira
