let imagen1 = document.getElementById('1');
let imagen2 = document.getElementById('2');
let imagen3 = document.getElementById('3');
let imagen4 = document.getElementById('4');
let observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
});

function cargarImagen(entradas) {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        } else {
            entrada.target.classList.remove('visible');
        }
    });
}

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);
