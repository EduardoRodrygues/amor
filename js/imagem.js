// Troca de imagem a cada 10 segundos
const imagens = document.querySelectorAll(".image");
let indice = 0;
let intervalo;

function mostrarImagem(index) {
  imagens.forEach(img => img.classList.remove("active"));
  imagens[index].classList.add("active");
}

function proximaImagem() {
  indice = (indice + 1) % imagens.length;
  mostrarImagem(indice);
}

function imagemAnterior() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarImagem(indice);
}

// Função para resetar o intervalo automático
function resetInterval() {
  clearInterval(intervalo);
  intervalo = setInterval(proximaImagem, 10000);
}

resetInterval();

// Detectar deslize no celular
let touchStartX = 0;
let touchEndX = 0;

const imageContainer = document.querySelector(".image-container");

imageContainer.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});

imageContainer.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  handleGesture();
});

function handleGesture() {
  const distancia = touchEndX - touchStartX;

  if (distancia > 50) {
    imagemAnterior();
    resetInterval();
  } else if (distancia < -50) {
    proximaImagem();
    resetInterval();
  }
}
