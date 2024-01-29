const selectGeneros = document.getElementById('selectGen');
const selectPlataforma = document.getElementById('selectPlat');
const form = document.getElementById('form-crear');

document.getElementById('addGameButton').addEventListener('click',  () => { 
    form.style.display = 'block';
});

async function loadGames() {
    fetch('http://localhost:3000/juegos')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(games => {
            const tbody = document.getElementById('container');
            games.forEach(game => {
                tbody.innerHTML += `
                <tr>
                    <th scope="row">${game.id}</th>
                    <td>${game.titulo}</td>
                    <td>${game.genero}</td>
                    <td>${game.plataforma}</td>
                    <td>${game.lanzamiento}</td>
                    <td>${game.desarrolladora}</td>
                    <td><button type="button" class="btn btn-outline-warning" style="margin-right: 15px">Editar</button><button type="button" class="btn btn-outline-danger">Eliminar</button></td>
                </tr>
                `;
            });
        });
}

async function addGame() {
    try {
        const response = await fetch('http://localhost:3000/juegos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    titulo: document.getElementById('newTitle').value, 
                    genero: document.getElementById('newGender').value,
                    plataforma: document.getElementById('newPlat').value,
                    lanzamiento: document.getElementById('newFecha').value, 
                    titulo: document.getElementById('newDesa').value 
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        form.style.display = 'none';
        loadGames();
    } catch (error) {
        console.log(`Error al añadir el videojuego: ${error.message}`);
    }
}



loadGames();
