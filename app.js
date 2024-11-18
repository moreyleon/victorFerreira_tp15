let stockPeliculas = require("./peliculas");
let fs = require("fs");
let mensaje = fs.readFileSync("./mensaje.txt","utf-8");

for (let i = 0; i < stockPeliculas.length; i++) {
    console.log(stockPeliculas); 
}

console.log(mensaje);
