// all retorna un node list iterable
const inputs = document.querySelectorAll('.controls input');

// function handleUpdate() {
//     // crea un sufijo con el tipo de sizing
//     const suffix = this.dataset.sizing || '';
//     // cuandos se cambian los valores en la vista, setea los valores de root --var() a los actuales elegidos
//     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
// }

const handleUpdate = function() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => { input.addEventListener('change', handleUpdate) });
inputs.forEach((input) => { input.addEventListener('mousemove', handleUpdate) });