// Seleccionamos el botón del menú hamburguesa
const menuBtn = document.querySelector('.menu-hamburguesa-btn');

// Seleccionamos el contenedor del menú
const menuContainer = document.querySelector('.menu-hamburguesa-container');

// Agregamos un evento de click al botón del menú
menuBtn.addEventListener('click', () => {
  // Toggle el estado del menú
  menuBtn.classList.toggle('active');
  menuContainer.classList.toggle('active');
});

// Agregamos un evento de click a cada item del menú
document.querySelectorAll('.menu-hamburguesa-container a').forEach((item) => {
  item.addEventListener('click', (e) => {
    // Obtenemos la categoría seleccionada
    const category = e.target.getAttribute('data-category');

    // Realizamos una solicitud a la API de Rick y Morty con la categoría seleccionada
    fetch(`https://rickandmortyapi.com/api/${category}`)
     .then((response) => response.json())
     .then((data) => {
        // Mostramos los resultados en la consola
        console.log(data);
      })
     .catch((error) => {
        console.error(error);
      });
  });
});