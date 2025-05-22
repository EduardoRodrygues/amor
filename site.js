// Array com o conteúdo das cartinhas
const cartinhasTextos = [
  { titulo: "Mês 1 - O Início de Tudo", mensagem: "Foi muita sorte a gente ter se conhecido na quela semana de carnaval, e desde então tudo foi incrível. Viramos amigos, melhores amigos, ficamos gays um com o outro e começamos a namorar.", mensagem2: "Te pedir em namoro em 29/06 foi uma das melhores decisões da minha vida. Desde então, vivemos momentos únicos, com abraços, risadas e beijos que dizem tudo" },

  { titulo: "Mês 2 - Dois Meses de Nós", mensagem: "Dois meses ao seu lado e só consigo sentir gratidão. Cada momento que nós passamos juntos — as brincadeiras, o love-love, as pregações, é tudo muito especial pra mim. Mesmo com alguns conflitos, que na verdade, só fortaleceram a gente, e me fizeram ver ainda mais o quanto você é importante.",  mensagem2: "Teve o dia que quis ficar sozinho, e percebi que, não quero ficar longe de você, porque sua presença virou essencial para mim. Você me mostrou o que é amar e ser amado, e sou muito grato por isso."},

  { titulo: "Mês 3 - A Nossa Conexão Natural ", mensagem: "No terceiro mês, eu amei como tudo entre a gente foi acontecendo de forma natural, nossa intimidade crescendo no nosso tempo, ficamos mais confortáveis um com outro. E percebi que não conseguiria mais imaginar meus dias sem você, sem escutar sua linda voz com seus áudios gigantes (que eu adoro).",  mensagem2: "Obrigado por ser essa pessoa melosa, grudendinha e maravilhosa que eu amo tanto. E claro, que a gente continue sendo dois bobos apaixonados, com muitos beijos, abraços, pregações e, principalmente, amor."},

  { titulo: "Mês 4 - Um Passo de Cada Vez ", mensagem: "Mais um mês dessa história incrível que a gente tá construindo. Mesmo com alguns momentos tristes, a gente sempre se resolve e transforma tudo em risada e leveza. Esse mês foi cheio de brincadeiras, competições que acabamos nós perdendo um pouco(rsrs) e provas de que estamos juntos em tudo, nos momentos bons e ruins.",  mensagem2: "Cada dia só reforça o quanto quero você ao meu lado. E claro, o presente (uma havaiana simples, mas cheia de amor e carinho) é só um lembrete de todos os passos lindos que demos para chegar onde chegamos juntos."},

  { titulo: "Mês 5 - ", mensagem: "Quando completamos 5 meses foi surreal como quele mês foi incrível e como passou rápido, como as nossas alianças me fizeram ainda mais feliz e realizado, porque elas simbolisão muito coisa, o carinho, repeito, confiança, proximidade, intimidade, união e amor que temos um pelo outro.",  mensagem2: "Esse mês foi cheio de momentos especiais, mas o que mais marcou foi como começamos a nos perder legal. Os Dates trouxeram  tanta felicidade e amor, foram tão especiais para mim, foram momentos que vou guardar no coração para sempre."},

  { titulo: "Mês 6 - Presente de Natal", mensagem: "O nosso primeiro Natal juntos, que lindo foi!" },
  { titulo: "Mês 7 - Teu Aniversário", mensagem: "Comemorar ao seu lado foi especial demais." },
  { titulo: "Mês 8 - Aprendizados", mensagem: "Cada conversa, cada reconciliação, só nos uniu." },
  { titulo: "Mês 9 - Mais Conexão", mensagem: "Nossa sintonia ficou ainda mais forte." },
  { titulo: "Mês 10 - Planos Juntos", mensagem: "Pensar no futuro ao teu lado é maravilhoso." },
  { titulo: "Mês 11 - Maturidade", mensagem: "Crescemos tanto juntos nesse mês." },
  { titulo: "Mês 12 - 1 Ano de Amor", mensagem: "Chegamos até aqui e quero mais mil anos contigo." }
];


// Troca de imagem a cada 10 segundos
const imagens = document.querySelectorAll(".image");
let indice = 0;
setInterval(() => {
  imagens[indice].classList.remove("active");
  indice = (indice + 1) % imagens.length;
  imagens[indice].classList.add("active");
}, 10000);

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
    titulo: "terceira Música",
    arquivo: "musicas/musica3.mp3",
    capa: "img/capa3.jpg"
  },
  {
    titulo: "Quarta Música",
    arquivo: "musicas/musica4.mp3",
    capa: "img/capa4.jpg"
  }
];

let indiceAtual = 0;
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
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
    playPauseBtn.textContent = "❚❚";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
}

function nextMusic() {
  indiceAtual = (indiceAtual + 1) % musicas.length;
  carregarMusica(indiceAtual);
  audio.play();
  playPauseBtn.textContent = "❚❚";
}

function prevMusic() {
  indiceAtual = (indiceAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(indiceAtual);
  audio.play();
  playPauseBtn.textContent = "❚❚";
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

// Carrega a primeira música
carregarMusica(indiceAtual);


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

// Função para mostrar a seção de Cartinhas
document.getElementById("mostrar-cartinhas").addEventListener("click", function() {
  const cartinhasLista = document.getElementById("cartinhas-lista");

  // Exibir ou esconder as cartinhas
  if (cartinhasLista.style.display === 'grid') {
    cartinhasLista.style.display = 'none';  // Esconde as cartinhas
  } else {
    cartinhasLista.style.display = 'grid';  // Exibe as cartinhas

    // Gerar as cartinhas clicáveis
    cartinhasLista.innerHTML = '';
    for (let i = 0; i < 12; i++) {
      const cartinha = document.createElement("div");
      cartinha.classList.add("cartinha");
      cartinha.setAttribute("data-numero", i);
      cartinha.innerText = `Cartinha ${i + 1}`;
      cartinhasLista.appendChild(cartinha);
    }
  }
});

// Adicionar o comportamento de abrir e fechar as cartinhas individualmente
document.getElementById("cartinhas-lista").addEventListener("click", function(event) {
  if (event.target.classList.contains("cartinha")) {
    const numero = event.target.getAttribute("data-numero");
    const cartinhaConteudo = document.getElementById("cartinha-conteudo");

    // Verifica se a cartinha está aberta, se sim, fecha; se não, abre
    if (cartinhaConteudo.style.display === 'block' && cartinhaConteudo.dataset.numero === numero) {
      cartinhaConteudo.style.display = 'none';
    } else {
      // Exibe a cartinha com conteúdo
      const conteudo = cartinhasTextos[numero];
      cartinhaConteudo.innerHTML = `
        <h2 style="font-family: 'Great Vibes', cursive; color: #333; margin-bottom: 15px;">${conteudo.titulo}</h2>
        <p style="font-size: 1.6rem; color: #333;">${conteudo.mensagem}</p>
        <p style="font-size: 1.6rem; color: #333;">${conteudo.mensagem2}</p>
      `;
      cartinhaConteudo.style.display = "block";
      cartinhaConteudo.dataset.numero = numero; // Guarda qual cartinha foi aberta
    }
  }
});