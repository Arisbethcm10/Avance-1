const pantallaPrincipal = document.getElementById('pantalla-principal');
const pantallaDetalles = document.getElementById('pantalla-detalles');
const buscarBtn = document.getElementById('buscar-btn');
const homeBtn = document.getElementById('home-btn');
const peliculaBuscador = document.getElementById('pelicula-buscador');

const imagen = document.getElementById('pelicula-imagen');
const nombreTxt = document.getElementById('pelicula-nombre');
const directorTxt = document.getElementById('pelicula-director');
const fechaTxt = document.getElementById('pelicula-fecha');
const descripcionTxt = document.getElementById('pelicula-descripcion');

function cambiarPantalla(mostrarPrincipal) {
  if (mostrarPrincipal) {
    pantallaPrincipal.style.display = 'block';
    pantallaDetalles.style.display = 'none';
  } else {
    pantallaPrincipal.style.display = 'none';
    pantallaDetalles.style.display = 'block';
  }
}

function buscarPelicula() {
  const nombre = peliculaBuscador.value.trim().toLowerCase();
  if (!nombre) {
    alert('Por favor, escribe el nombre de una película.');
    return;
  }

  fetch('https://ghibliapi.vercel.app/films')
    .then(response => {
      if (!response.ok) throw new Error('Error al obtener datos de la API.');
      return response.json();
    })
    .then(peliculas => {
      const peliculaEncontrada = peliculas.find(pelicula =>
        pelicula.title.toLowerCase().includes(nombre)
      );

      if (peliculaEncontrada) {
        mostrarPelicula(peliculaEncontrada);
        cambiarPantalla(false);
      } else {
        throw new Error(`La película "${nombre}" no fue encontrada.`);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.message);
      cambiarPantalla(true);
    });
}

function mostrarPelicula(pelicula) {
  imagen.setAttribute('src', pelicula.image || 'https://via.placeholder.com/300');
  nombreTxt.innerText = `Título: ${pelicula.title}`;
  directorTxt.innerText = `Director: ${pelicula.director}`;
  fechaTxt.innerText = `Año de lanzamiento: ${pelicula.release_date}`;
  descripcionTxt.innerText = `Descripción: ${pelicula.description}`;
}

buscarBtn.addEventListener('click', buscarPelicula);
homeBtn.addEventListener('click', () => cambiarPantalla(true));
