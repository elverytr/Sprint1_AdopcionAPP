import mascotas from './info.js';
import persona from './info-perfil.js';


const idPersona = 0
//Trae la lista de las mascotas favoritas de idPersona
const favoritas = JSON.parse(localStorage.getItem('favoritas'))
alert(favoritas)

//Selecciona la tabla dentro de la cual se van a mostrar las mascotas en el html
const mostrar_mascotas = document.querySelector("#mostrar-mascotas-favoritas");

//Funcion que imprime los perros en tarjetas en la tabla mostrar_mascotas
function mostrar_perros() {
    localStorage.setItem('categoria','perro')
    btn_mostrar_perros.style.opacity = '100%'
    btn_mostrar_gatos.style.opacity = '50%'
    let i = 0
    let j = 1
    mostrar_mascotas.innerHTML = ``
    while (i < perros.length) {
        if (perros[j]) {
            mostrar_mascotas.innerHTML += ` <tr>
                                                <td>
                                                    <img id="card" class="img-resultado" src="${perros[i].foto}" onclick="guardar(${perros[i].id})"/>
                                                </td>
                                                <td>
                                                    <img id="card" class="img-resultado" src="${perros[j].foto}" / onclick="guardar(${perros[j].id})"/>
                                                </td>
                                            </tr>`;
        }else {
            mostrar_mascotas.innerHTML += `<tr>
                                                <td>
                                                    <a href="detalles.html">
                                                        <img id="card" class="img-resultado" src="${perros[i].foto}" onclick="guardar(${perros[i].id})"/>
                                                    </a>
                                                </td>
                                            </tr> `;
        }
        i += 2
        j += 2
    }
}

//Funcion que imprime los gatos en tarjetas en la tabla mostrar_mascotas
function mostrar_gatos() {
    localStorage.setItem('categoria','gato')
    btn_mostrar_perros.style.opacity = '50%'
    btn_mostrar_gatos.style.opacity = '100%'
    let i = 0
    let j = 1
    mostrar_mascotas.innerHTML = ``
    while (i < gatos.length) {
        if (gatos[j]) {
            mostrar_mascotas.innerHTML += ` <tr>
                                                <td>
                                                    <img id="card" class="img-resultado" src="${gatos[i].foto}" onclick="guardar(${gatos[i].id})"/>
                                                </td>
                                                <td>
                                                    <img id="card" class="img-resultado" src="${gatos[j].foto}" onclick="guardar(${gatos[j].id})"/>
                                                </td>
                                            </tr>`;
        }
        else {
            mostrar_mascotas.innerHTML += ` <tr>
                                                <td>
                                                    <img id="card" class="img-resultado" src="${gatos[i].foto}" onclick="guardar(${gatos[i].id})"/>
                                                </td>
                                            </tr>`;
        }
        i += 2
        j += 2
    }    
}
