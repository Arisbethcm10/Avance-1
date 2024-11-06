console.log("Hola desde el archivo demo");

let a = 5;
let b = 3;

let resultado = ((a + b - 2)*3)/2;
console.log(resultado);
resultado +=1;

console.log(a > b);
console.log(a === b);
console.log(resultado % 3 ==0 ? "👍" : "👎");
let cadena = "hola, " + "mundo!";
console.log(cadena);


function suma(a, b) {
return a + b;
}
let resultad = suma(5, 3);
console.log(resultad); // 8


let resta = function (a, b) {
return a - b;
};
console.log(resta(5, 3)); // 2

let multiplicacion = (a , b) => a * b;
console.log(multiplicacion(5 , 3)); // 15

let objeto = {
nombre: "Jaime",
saludar: function () {
setTimeout(() => {
console.log(`Hola, soy ${this.nombre}`);
}, 1000);
},
};
 objeto.saludar();



 let frutas = ["🍎"
    ,
    "🍐"
    ,
    "🍇"
    ,
    "🍓"];
    
    
    frutas.push("🥭");
    frutas.unshift("🍌");
    frutas.pop();
    console.log(frutas); // 🍌, 🍎, 🍐, 🍇
    let frutas2 = frutas.slice(1, 3);
    console.log(frutas2.join(" - ")); // 🍎 - 🍐
    console.log(frutas.length); // 5
    console.log(frutas.indexOf("🍇")); // 3
    
    let frutas3 = frutas.map((fruta) => fruta +
    "🍉");
    console.table(frutas3);
