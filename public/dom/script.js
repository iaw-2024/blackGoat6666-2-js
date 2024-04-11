function fetchDataFromJSON(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

function mostrarMonstruos() {
    const listaMonstruos = document.getElementById('lista-monstruos');

    var url = './data.json'; 
    fetchDataFromJSON(url)
        .then(monstruos => {

            monstruos.forEach(monstruo => {
                const li = document.createElement('li');
                li.className = 'flex text-center m-8 bg-item';
                li.innerHTML = `
                    <div class="m-8 w-1/2">
                        <h1 class="text-base md:text-5xl font-bold text-center">${monstruo.nombre}</h1>
                        <p class="text-base md:text-2xl">${monstruo.descripcion}</p>
                        <h4 class="text-base md:text-3xl font-bold">Color: ${monstruo.color}</h4>
                        <h5 class="text-base md:text-3xl font-bold">Habilidades: ${monstruo.habilidades}</h5>
                    </div>
                    <div class="m-8 w-1/2 flex justify-center items-center">
                        <img class="h-80 object-contain sm:h-auto rounded-md" src="${monstruo.imagen}" alt="${monstruo.nombre}">
                    </div>
                `;
                listaMonstruos.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}


  // Llamar a la función para mostrar los monstruos
  mostrarMonstruos();