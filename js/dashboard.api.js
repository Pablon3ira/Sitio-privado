function GetCharacters(done, gender = "", species = "") {
    let url = "https://rickandmortyapi.com/api/character";
    if (gender || species) {
        url += `?${gender ? `gender=${gender}&` : ''}${species ? `species=${species}&` : ''}`;
        url = url.slice(0, -1); // Remove trailing '&'
    }

    fetch(url)
        .then(response => response.json())
        .then(data => done(data));
}

function displayCharacters(data) {
    const main = document.querySelector("main");
    main.innerHTML = ""; // Clear previous results
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
                    <article>
                        <div class="image-container">
                            <img src="${personaje.image}" alt="Personaje">
                        </div>
                        <h2>${personaje.name}</h2>
                        <span>${personaje.status}</span>
                        <p>${personaje.gender}</p>
                        <span>${personaje.species}</span>
                    </article>
                `);
        main.append(article);
    });
}

document.getElementById('filterButton').addEventListener('click', () => {
    const gender = document.getElementById('genderFilter').value;
    const species = document.getElementById('speciesFilter').value;
    GetCharacters(displayCharacters, gender, species);
});

// Initial load
GetCharacters(displayCharacters);

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