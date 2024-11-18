// Referencias a elementos del DOM

let pantallaPrincipal = document.getElementById('pantalla-principal');

let pantallaDetalles = document.getElementById('pantalla-detalles');

let buscarBtn = document.getElementById('buscar-btn');

let homeBtn = document.getElementById('home-btn');

let pokemonBuscador = document.getElementById('pokemon-buscador');



// Elementos de la pantalla de detalles

let image = document.getElementById('pokemon-imagen');

let nombreTxt = document.getElementById('pokemon-nombre');

let typesList = document.getElementById('pokemon-tipos');

let altura = document.getElementById('pokemon-altura');

let peso = document.getElementById('pokemon-peso');

let habilidadesList = document.getElementById('pokemon-habilidades');

let statsList = document.getElementById('pokemon-estadisticas');

let sonidoBtn = document.getElementById('pokemon-sonido');



// Nuevo contenedor para la información

let informacionDetalles = document.createElement("div");

informacionDetalles.id = "informacion-detalles";



// Añadir elementos al contenedor de información

informacionDetalles.appendChild(nombreTxt);

informacionDetalles.appendChild(typesList);

informacionDetalles.appendChild(altura);

informacionDetalles.appendChild(peso);

informacionDetalles.appendChild(habilidadesList);

informacionDetalles.appendChild(statsList);

informacionDetalles.appendChild(sonidoBtn);



// Añadir imagen y contenedor de información a la pantalla de detalles

pantallaDetalles.appendChild(image);

pantallaDetalles.appendChild(informacionDetalles);



// Inicialización

pantallaDetalles.appendChild(nombreTxt);

pantallaDetalles.appendChild(image);

pantallaDetalles.appendChild(typesList);

pantallaDetalles.appendChild(altura);

pantallaDetalles.appendChild(peso);

pantallaDetalles.appendChild(habilidadesList);

pantallaDetalles.appendChild(statsList);

pantallaDetalles.appendChild(sonidoBtn);



// Función para alternar pantallas

function cambiarPantalla(mostrarPrincipal) {

  if (mostrarPrincipal) {

    pantallaPrincipal.style.display = 'block';

    pantallaDetalles.style.display = 'none';

  } else {

    pantallaPrincipal.style.display = 'none';

    pantallaDetalles.style.display = 'block';

  }

}



// Función para buscar Pokémon

function buscarPokemon() {

  let nombre = pokemonBuscador.value.toLowerCase();



  // Llamada a la API

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`

  )

    .then((response) => {

      if (!response.ok) throw new Error(`El Pokémon "${nombre}" no fue encontrado.`);

      return response.json();

    })

    .then((pokemon) => {

      mostrarPokemon(pokemon); 

      cambiarPantalla(false); 

    })

    .catch((error) => {

      limpiarPantalla();

      alert(error.message); 

      cambiarPantalla(true); 

    });



}





// Función para mostrar datos del Pokémon

function mostrarPokemon(pokemon) {

    // Limpiar contenido previo

    typesList.innerHTML = '';

    habilidadesList.innerHTML = '';

    statsList.innerHTML = '';

  

    // Asignar datos nuevos

    nombreTxt.innerText = pokemon.name.toUpperCase();

    image.setAttribute('src', pokemon.sprites.front_default);

    altura.innerText = `Altura: ${pokemon.height / 10} m`;

    peso.innerText = `Peso: ${pokemon.weight / 10} kg`;

  

    // Listar los tipos

    pokemon.types.forEach((tipo) => {

      let item = document.createElement('li');

      item.innerText = tipo.type.name;

      typesList.appendChild(item);

    });

  

    // Listar las habilidades

    habilidadesList.innerHTML = "<strong>Habilidades:</strong>";

    pokemon.abilities.forEach((habilidad) => {

      let item = document.createElement('li');

      item.innerText = habilidad.ability.name;

      habilidadesList.appendChild(item);

    });

  

    // Listar las estadísticas

    statsList.innerHTML = "<strong>Estadísticas Base:</strong>";

    pokemon.stats.forEach((stat) => {

      let item = document.createElement('li');

      item.innerText = `${stat.stat.name}: ${stat.base_stat}`;

      statsList.appendChild(item);

    });

  

    // Botón de sonido

    sonidoBtn.onclick = () => {

      const audio = new Audio('https://freesound.org/data/previews/250/250551_4486188-lq.mp3'); // Sonido genérico

      audio.play();

    };

  }



// Función para limpiar la pantalla de detalles

function limpiarPantalla() {

  nombreTxt.innerText = '';

  typesList.innerHTML = '';

  image.setAttribute('src', '');

  altura.innerText = '';

  peso.innerText = '';

  habilidadesList.innerHTML = '';

  statsList.innerHTML = '';

  sonidoBtn.innerHTML = '';

}



// Event Listeners

buscarBtn.addEventListener('click', buscarPokemon);

homeBtn.addEventListener('click', () => cambiarPantalla(true));