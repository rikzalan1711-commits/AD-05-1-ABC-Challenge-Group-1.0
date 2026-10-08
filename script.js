// 1. Arreglo con los 3 colores permitidos
const colores = ['green', 'blue', 'red'];

// 2. Función que retorna un color aleatorio del arreglo
function obtenerColorAleatorio() {
  const indice = Math.floor(Math.random() * colores.length);
  return colores[indice];
}

// 3. Seleccionar todas las etiquetas <h5> del documento
const encabezadosH5 = document.querySelectorAll('h5');

// 4. Agregar el evento click a cada <h5>
encabezadosH5.forEach((h5) => {
  h5.addEventListener('click', () => {
    // Al hacer clic en cualquier h5, todos cambian a un color aleatorio repetible
    encabezadosH5.forEach((elemento) => {
      elemento.style.color = obtenerColorAleatorio();
    });
  });
});