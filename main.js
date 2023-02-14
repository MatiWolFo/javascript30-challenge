// traerse los elementos desde HTML
const panels = document.querySelectorAll('.panel');
// crear funcion para togglear clase open de los paneles individuales
const toggleOpen = (panel) => {
    panel.classList.toggle('open')
};
// crear function para togglear la clase active de las letras de los paneles individuales, escucha cuando un evento se completa y que su resultado incluya en su nombre "flex" usando includes.
// ternary de validacion, null para que no pase nada
const toggleActive = (panel, e) => {
    e.propertyName.includes('flex')
        ? panel.classList.toggle('open-active')
        : null;
};
// define las funciones y pasa los argumentos a las funciones a traaves de una funcion anonima como callback para el event listener
// entrega panel a su funcion como argumento
panels.forEach(panel => panel
    .addEventListener('click', () => {
        toggleOpen(panel)
    }));
// entrega panel y evento a su funcion como argumento
panels.forEach(panel => panel
    .addEventListener('transitionend', (e) => {
        toggleActive(panel, e)
    }));