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

abrirNavbar.addEventListener("touchend", () => {
    nav.classList.add("visible");
}) 

cerrarNavbar.addEventListener("touchend", () => {
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


//Código para Favoritos
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
/*
class BaseDeDatos {
    constructor() {
        this.bandas = [];
        
        this.agregarBanda(1, "Seattle Supersonics", "Nirvana", "ssupersonics.jpg");
        this.agregarBanda(2, "Physical Graffiti", "Led Zeppelin", "physical_tributo.jpg");
    }
    //Esto crea la banda favorita y la almacena en favoritos
    agregarBanda(id, nombre, tributo, imagen){
        const banda = new Banda(id, nombre, tributo, imagen);
        this.bandas.push(banda);
    }

    traerBanda() {
        return this.bandas;
    }

    registroPorId(id) {
        return this.productos.find((banda) => banda.id == id);
    }

    registroPorNombre(palabra) {
        return this.bandas.filter((banda) => banda.nombre.toLowerCase().includes(palabra.toLowerCase()));
    }

}

class Favoritos{
    constructor(){
        this.favoritos = [];
        this.cantidadFavoritos = 0;
    }

    esFavorito(bandaNueva){
        return this.favoritos.find((banda) => banda.id === bandaNueva.id);
    };

    agregar(banda) {
        const bandaFavorita = this.esFavorito(banda);

        if (!bandaFavorita) {
            this.favoritos.push({ ...banda, cantidad: 1});
        } else {
            bandaFavorita.cantidad++;
        }
    }

    quitar(id) {

    }

    listar() {

    }
    
}

const bd = new BaseDeDatos();

const misBandas = document.querySelector(".flex_bands")

agregarBanda(bd.traerBanda());

function agregarFavorito(bandas) {
    misBandas.innerHTML = "";

    for (const banda of bandas) {
        misBandas.innerHTML += `
        <div class="band_box">
            <button class="favbutton"><img src="../Imagenes/star-line.svg" class="favstar" alt="icono de favorito vacío"></button>
            <img src="../Imagenes/Bands/${Banda.imagen}" class="band_img" alt="Logo de Power Of Nature">
            <h2 class="band_name">
                ${Banda.nombre}
            </h2>

            <p>
                Covers de <strong>Rock - Grunge</strong>
            </p>
            <a class="band_link" href="#">Ver Banda</a>
        </div>
        `;
    
        
    }
} 

*/
