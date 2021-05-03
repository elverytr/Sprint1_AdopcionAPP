import mascotas from './info.js';

//Detecta cuando se pulsa el botón de mostrar gatos o el de mostrar perros respectivamente
const btn_mostrar_perros = document.querySelector('#mostrar_perros');
const btn_mostrar_gatos = document.querySelector('#mostrar_gatos');

//Selecciona la tabla dentro de la cual se van a mostrar las mascotas en el html
const mostrar_mascotas = document.querySelector("#mostrar-mascotas");

//Filtra las mascotas por tipo perro y gato y las guarda en un arreglo nuevo por separado
const arreglo_perros = mascotas.mascota.filter(x => x.categoria == 'Perro');
const arreglo_gatos = mascotas.mascota.filter(x => x.categoria == 'Gato');

//Llama a la funcion que muestra los perros o la que muestra los gatos dependiendo de que botón se pulsó
btn_mostrar_perros.onclick = mostrar_perros;
btn_mostrar_gatos.onclick = mostrar_gatos;

//Funcion que imprime los perros en tarjetas en la tabla mostrar_mascotas
function mostrar_perros() {
    btn_mostrar_perros.style.opacity = '100%'
    btn_mostrar_gatos.style.opacity = '50%'
    let i = 0
    let j = 1
    mostrar_mascotas.innerHTML = ``
    while (i < arreglo_perros.length) {
        if (arreglo_perros[j]) {
            mostrar_mascotas.innerHTML += `<tr><td><a href="detalles.html?${arreglo_perros[i].id}"><img id="card" class="img-resultado" src="${arreglo_perros[i].foto}" /></a></td>
                                            <td><a href="detalles.html?${arreglo_perros[j].id}"><img id="card" class="img-resultado" src="${arreglo_perros[j].foto}" /></a></td></tr>                                        `;
        }
        else {
            mostrar_mascotas.innerHTML += `<tr><td><a href="detalles.html?${arreglo_perros[i].id}"><img id="card" class="img-resultado" src="${arreglo_perros[i].foto}" /></a></td>`;
        }
        i += 2
        j += 2
    }
}

//Funcion que imprime los gatos en tarjetas en la tabla mostrar_mascotas
function mostrar_gatos() {
    btn_mostrar_perros.style.opacity = '50%'
    btn_mostrar_gatos.style.opacity = '100%'
    let i = 0
    let j = 1
    mostrar_mascotas.innerHTML = ``
    while (i < arreglo_gatos.length) {
        if (arreglo_gatos[j]) {
            mostrar_mascotas.innerHTML += `<tr><td><a class="img-resultado" href="detalles.html?${arreglo_gatos[i].id}"><img id="card" class="img-resultado" src="${arreglo_gatos[i].foto}" /></a></td>
                                        <td><a href="detalles.html?${arreglo_gatos[j].id}"><img id="card" class="img-resultado" src="${arreglo_gatos[j].foto}" /></a></td></tr>`;
        }
        else {
            mostrar_mascotas.innerHTML += `<tr><td><a href="detalles.html?${arreglo_gatos[i].id}"><img id="card" class="img-resultado" src="${arreglo_gatos[i].foto}" /></a></td>`;
        }
        i += 2
        j += 2
    }
}