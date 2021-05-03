import mascotas from './info.js';

const id = localStorage.getItem('detallesDe')
const contenedor = document.querySelector("#contenedor")
const arreglo_mascotas = mascotas.mascota[id]

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
      email} = arreglo_mascotas

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
                              <img id="btn-agregar-favoritos" src="assets/img/a-favoritos.png" class="agregar-favoritos" />
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