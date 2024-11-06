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