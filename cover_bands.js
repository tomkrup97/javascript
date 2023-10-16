//Código para manejo de la Navbar en Mobile
const nav = document.querySelector("#navbar");
const abrirNavbar = document.querySelector("#menu_burger");
const cerrarNavbar = document.querySelector("#close_nav");

abrirNavbar.addEventListener("click", () => {
    nav.classList.add("visible");
}) 

cerrarNavbar.addEventListener("click", () => {
    nav.classList.remove("visible");
}) 



//Código para Buscador
document.addEventListener('keyup', e=> {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.band_box, .space_box, .show_box').forEach(band => {
            band.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? band.classList.remove('filtro')
            : band.classList.add('filtro')
        });
    }
})


//Código para traer bandas del json local
class Banda {
    constructor(id, nombre, tributo, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.tributo = tributo;
        this.genero = genero;
        this.imagen = imagen;
    }
}

class BaseDeDatos {
    constructor() {
        this.bandas = [];
        this.cargarBandas();
    }

    //Función de carga de bandas
    async cargarBandas() {
        const resultado = await fetch("/bandas.json");
        this.bandas = await resultado.json();
        cargarBanda(this.bandas);
        console.log(this.bandas);
    }

    //Función que devuelve las bandas
    traerBandas(){
        return this.bandas;
    }
}

const dataBase = new BaseDeDatos();

const divBandas = document.querySelector(".flex_bands")

cargarBanda(dataBase.traerBandas());

function cargarBanda(bandas) {
    divBandas.innerHTML = "";

    for (const banda of bandas) {
        divBandas.innerHTML += `
        <div class="band_box">
            <button class="favbutton"><img src="../Imagenes/star-line.svg" class="favstar" alt="icono de favorito vacío"></button>
            <img src="${banda.imagen}" class="band_img" alt="Logo de La San Francisco">           
            <h2 class="band_name">
            ${banda.nombre}
            </h2>

            <p>
                Covers de <strong>${banda.genero}</strong>
            </p>
            <a class="band_link" href="#">Ver Banda</a>
        </div>
        `;
    }
}


//Código para Favoritos (no funciona con el código para traer bandas del json local)
const favbuttons = document.querySelectorAll(".favbutton");
favbuttons.forEach(button => {
    button.addEventListener("click", function() {
        if (this.classList.contains("active")) {
            this.innerHTML = `<img src="../Imagenes/star-line.svg" class="favstar" alt="icono de favorito vacío">`;
            this.classList.remove("active");
            Toastify({
                text: "Eliminado de favoritos",
                duration: 3000,
                gravity: "bottom",
                position: "center",
                style: {
                    background: "linear-gradient(to bottom, #0d0d0d, #525252)",
                  },
                }).showToast();
        } else {
            this.innerHTML = `<img src="../Imagenes/star-filled.png" alt="icono de favorito lleno"/>`;
            this.classList.add("active");
            Toastify({
                text: "Agregado a favoritos",
                duration: 3000,
                gravity: "bottom",
                position: "center",
                style: {
                    background: "linear-gradient(to bottom, #0d0d0d, #525252)",
                  },
                }).showToast();
            
        }
    });
});