let titulo =
document.getElementById("titulo");
titulo.style.color = "red";
let parrafos =
document.getElementsByTagName("p");
Array.from(parrafos).forEach((el, idx) => {
el.innerText = "Texto " + (idx + 1);
 });
let parrafos2 =
document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor =
"greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo-párrafo</strong>";

let parrafo =
document.querySelector(".parrafo");
parrafo.className = "nuevo-parrafo";

let parrafo_nuevo = document.createElement("p");
parrafo_nuevo.innerText = "este parrafo tiene un emoji 😍";
document.body.appendChild(parrafo_nuevo);
console.log(parrafo_nuevo);




let h1 = document.createElement("h1");
h1.innerText= "Titulo dinamico";

let hr = document.createElement("hr");

parrafo_nuevo.prepend(h1);
parrafo_nuevo.append(hr);




//let parrafo = document.querySelector("p");
let padre_parrafo = parrafo.parentElement;
console.log(padre_parrafo); // body

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++) {
let item = document.createElement("li");
item.innerText = `Elemento ${i}`;
lista.appendChild(item);
}

padre_parrafo.appendChild(lista);
