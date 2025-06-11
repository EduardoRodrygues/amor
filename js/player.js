//player de musica
const musicas = [
  {
    titulo: "Samba Paixão",
    arquivo: "musicas/musica1.mp3",
    capa: "img/capa1.jpg"
  },
  {
    titulo: "Grão de Areia",
    arquivo: "musicas/musica2.mp3",
    capa: "img/capa2.jpg"
  },
  {
    titulo: "Memories",
    arquivo: "musicas/musica3.mp3",
    capa: "img/capa3.jpg"
  },
  {
    titulo: "Meu Esquema",
    arquivo: "musicas/musica4.mp3",
    capa: "img/capa4.jpg"
  },
  {
    titulo: "Você Gosta Dela",
    arquivo: "musicas/musica5.mp3",
    capa: "img/capa5.jpg"
  }
];

let indiceAtual = 0;
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const playPauseBtnicon = document.getElementById("playPauseicon");
const musicTitle = document.getElementById("music-title");
const albumImage = document.getElementById("album-image");
const currentTimeEl = document.getElementById("current-time");
const totalTimeEl = document.getElementById("total-time");
const progress = document.getElementById("progress");

function carregarMusica(indice) {
  const musica = musicas[indice];
  audio.src = musica.arquivo;
  musicTitle.textContent = musica.titulo;
  albumImage.src = musica.capa;
  audio.load();
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseBtnicon.src = "/img/pause.png";
  } else {
    audio.pause();
    playPauseBtnicon.src = "/img/play.png";
  }
}

function nextMusic() {
  indiceAtual = (indiceAtual + 1) % musicas.length;
  carregarMusica(indiceAtual);
  audio.play();
  playPauseBtnicon.src = "/img/pause.png";
}

function prevMusic() {
  indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(indiceAtual);
  audio.play();
  playPauseBtnicon.src = "/img/pause.png";
}

audio.addEventListener("timeupdate", () => {
  const current = audio.currentTime;
  const duration = audio.duration;
  progress.value = (current / duration) * 100 || 0;
  currentTimeEl.textContent = formatarTempo(current);
  totalTimeEl.textContent = formatarTempo(duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

audio.addEventListener("ended", nextMusic);

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60) || 0;
  const sec = Math.floor(segundos % 60) || 0;
  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

carregarMusica(indiceAtual);
