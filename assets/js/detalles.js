import mascotas from './info.js';
import persona from './info-perfil.js';

let img_favoritos

//Trae los detalles de la mascota cuyo id corresponde con el que está en el localStorage en 'detallesDe'
const id = JSON.parse(localStorage.getItem('detallesDe'))

//
const idPersona = 0
const sesion = []

//Consulta el contenedor donde se va a mostrar la descripcion de la mascota dentro del html
const contenedor = document.querySelector("#contenedor")

//Crea un arreglo con los datos de la mascota cuyo id corresponde con el que está en el localStorafe en 'detallesDe'
const arreglo_mascotas = mascotas.mascota[id]

//Detecta si el id de la mascota se encuentra en la lista de mascotas favoritas del usuario y en base
//a esto define la imagen del botón de agregar/desagregar a favoritos
if (persona.datos[idPersona].mascotasFavoritas.includes(JSON.parse(id))) {
  img_favoritos = 'assets/img/favorito.png'
} else {
  img_favoritos = 'assets/img/a-favoritos.png'
}

//Desestructura el arreglo que contiene los detalles de la mascota
const {
  nombre,
  foto,
  foto_presentacion,
  sexo,
  raza,
  edad,
  ubicacion_l1,
  ubicacion_l2,
  personalidad,
  historia,
  autor,
  email } = arreglo_mascotas

//Muestra en el contenedor de html los detalles de la mascota
contenedor.innerHTML = `<main class="principal">
                          <a href="home.html" class="btn-regresar"
                            ><img src="assets/img/back.png"
                          /></a>
                          <div class="container-foto">
                            <img src="${foto}" alt="" class="foto" />
                          </div>
                          <div class="container-info">
                            <div class="seccion1">
                              <span class="nombre">${nombre}</span>
                              <img src="assets/img/${sexo}.png" class="simbol-genero" />
                              <span id="container-btn-fav">
                                <img id="btn_agregar_favoritos" src="${img_favoritos}" class="agregar-favoritos")/>
                              </span>
                            </div>
                            <div class="seccion">
                              <div class="raza"><img src="assets/img/raza.png" />${raza}</div>
                              <div class="edad"><img src="assets/img/edad.png" />${edad}</div>
                            </div>
                            <div class="seccion">
                                <img class="simbol-ubicacion" src="assets/img/ubicacion.png" />
                                <div class="div-ubicacion">
                                <p class="ubicacion-l-1">${ubicacion_l1}</p>
                                <p class="ubicacion-l-2">${ubicacion_l2}</p>
                              </div>
                            </div>
                            <div class="seccion sec-personalidad">
                              <h1 class="tit-section">Personalidad</h1>
                              <img src="assets/img/${personalidad[0]}.png" alt="" class="personalidad" />
                              <img src="assets/img/${personalidad[1]}.png" alt="" class="personalidad" />
                              <img src="assets/img/${personalidad[2]}.png" alt="" class="personalidad" />
                            </div>
                            <div class="seccion">
                              <h1 class="tit-section">Historia</h1>
                              <p class="historia">
                              ${historia}
                              </p>
                            </div>
                            <div class="seccion sec-autor">
                              <img class="img-autor" src="assets/img/a-favoritos.png" />
                              <div class="div-autor">
                                <p class="autor">Publicado por:</p>
                                <p class="nombre-autor">${nombre}</p>
                              </div>
                              <a href="chat.html?id=${id}" class="btn contactar">Contactar</a>
                            </div>
                          </div>
                        </main>
                        `

//Detecta si la persona hizo click en el botón de agregar/desagregar a favoritos
const btn_agregar_favoritos = document.querySelector('#btn_agregar_favoritos')
btn_agregar_favoritos.onclick = guardarFavorito;

//Si la mascota no está como favorita la agrega a favoritas, en caso contrario la desagrega
const container_btn_fav = document.querySelector("#container-btn-fav")

function guardarFavorito(){
  if (persona.datos[idPersona].mascotasFavoritas.includes(id)) {
    let posicion = persona.datos[idPersona].mascotasFavoritas.indexOf(id)
    persona.datos[idPersona].mascotasFavoritas.splice(posicion,1)
    container_btn_fav.innerHTML = '<img id="btn_agregar_favoritos" src="assets/img/a-favoritos.png" class="agregar-favoritos")/>'
  } else {
    persona.datos[idPersona].mascotasFavoritas.push(id)
    container_btn_fav.innerHTML = '<img id="btn_agregar_favoritos" src="assets/img/favorito.png" class="agregar-favoritos")/>'
  }
}