//inicio del script para el reto de las cajas dom js//

//1.cuando haga click en el btn cajas titulo se cambe el titulo de las cajas//
document.getElementById("btn-cajas-titulo").addEventListener("click", () => {
    const titulocajas =
        document.getElementById("titulo-cajas");
    titulocajas.textContent = "Emilio";
});


//cambiar el color de la caja (TODAS)//
document.getElementById("btn-color-cajas").addEventListener("click", () => {
    const cajas =
        document.getElementsByClassName("caja");
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].style.backgroundColor = "blue"
    }
});

//cambiar el color de la caja (SOLO LA PRIMERA)//
document.getElementById("btn-color-caja1").addEventListener("click", () => {
    const caja1 =
        document.querySelector(".caja"); // 
    caja1.style.backgroundColor = "green"
}); 

//Agregar borde a todas las cajas//
document.getElementById("btn-borde").addEventListener("click", () => {
    const borde =
        document.querySelectorAll(".caja");
    
    borde.forEach(caja => {
        caja.style.border = "10px solid pink";
    });
});

const imageUrlInput = document.getElementById('imageUrlInput');
const addImageBtn = document.getElementById('addImageBtn');
const galleryContainer = document.getElementById('galleryContainer');

// Evento al hacer clic en el botón
addImageBtn.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  
  if (imageUrl) {
    // Crear un nuevo contenedor para la imagen
    const col = document.createElement('div');
    col.classList.add('col'); // Para usar la rejilla de Bootstrap

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm'); 
    img.alt = 'Imagen añadida';

    // Agregar la imagen dentro del contenedor
    col.appendChild(img);

    // Añadir el contenedor a la galería
    galleryContainer.appendChild(col);

    // Limpiar input
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});