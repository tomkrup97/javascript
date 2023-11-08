//Código para manejo de la Navbar en Mobile
const header  = document.querySelector("header");
const nav = document.querySelector("#navbar");
const abrirNavbar = document.querySelector("#NavButton");
const cerrarNavbar = document.querySelector("#NavButton");

const rotate1 = document.querySelector("#line1");
const rotate2 = document.querySelector("#line2");
const rotate3 = document.querySelector("#line3");


abrirNavbar.addEventListener("click", () => {
    nav.classList.toggle("visible");
    nav.classList.toggle("desplegar_menu");
    rotate1.classList.toggle("firstRotate");
    rotate2.classList.toggle("secondNone");
    rotate3.classList.toggle("thirdRotate");
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

