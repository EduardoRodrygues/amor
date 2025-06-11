// Contador de tempo de namoro
const dataInicio = new Date('2024-06-29T15:00:00'); // 29/07/2023

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

setInterval(atualizarContador, 1000);
atualizarContador();