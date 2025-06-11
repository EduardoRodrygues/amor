// Array com o conteúdo das cartinhas
const cartinhasTextos = [
  { titulo: "O Início de Tudo", 
    mensagem: "Foi muita sorte a gente ter se conhecido naquela semana de carnaval, e desde então tudo foi incrível. Viramos amigos, melhores amigos, ficamos gays um com o outro e começamos a namorar.", mensagem2: "Te pedir em namoro em 29/06 foi uma das melhores decisões da minha vida. Desde então, vivemos momentos únicos, com abraços, risadas e beijos que dizem tudo.",
    mensagem3: "",
    mensagem4: "",
   },

  { titulo: "Dois Meses de Nós", 
    mensagem: "Dois meses ao seu lado e só consigo sentir gratidão. Cada momento que nós passamos juntos, as brincadeiras, o love-love, as pegações, é tudo muito especial pra mim. Esse pouco tempo juntos me fizeram ver   o quanto você é importante e incrível.",  
    mensagem2: "Teve o dia que quis ficar sozinho e percebi que não quero ficar longe de você, porque sua presença virou essencial para mim. Você me mostrou o que é amar e ser amado, e sou muito grato por isso.",
    mensagem3: "",
    mensagem4: "",
   },

  { titulo: "A Nossa Conexão Natural ", 
    mensagem: "No terceiro mês, eu amei como tudo entre a gente foi acontecendo de forma natural, nossa intimidade crescendo no nosso tempo, ficamos mais confortáveis um com o outro. E percebi que não conseguiria mais imaginar meus dias sem você, sem escutar sua linda voz com seus áudios gigantes (que eu adoro).",  
    mensagem2: "Obrigado por ser essa pessoa melosa, grudendinha e maravilhosa que eu amo tanto. E claro, que a gente continue sendo dois bobos apaixonados, com muitos beijos, abraços, love-love, e principalmente, amor.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "Um Passo de Cada Vez ", 
    mensagem: "Mais um mês dessa história incrível que a gente tá construindo. Mesmo com alguns momentos tristes, a gente sempre se resolve e transforma tudo em risada e leveza. Esse mês foi cheio de brincadeiras, competições que acabamos nos perdendo um pouco(rsrs) e provas de que estamos juntos em tudo, nos momentos bons e ruins.",  
    mensagem2: "Cada dia só reforça o quanto quero você ao meu lado. E claro, o presente (uma havaiana simples, mas cheia de amor e carinho) é só um lembrete de todos os passos lindos que demos para chegar onde chegamos juntos.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "Aliançados e Apaixonados", 
    mensagem: "Quando completamos 5 meses, foi surreal como aquele mês foi incrível e como passou rápido, como as nossas alianças me fizeram ainda mais feliz e realizado, porque elas simbolizam muita coisa, o carinho, respeito, confiança, proximidade, intimidade, união e amor que temos um pelo outro.",  
    mensagem2: "Esse mês foi cheio de momentos especiais, mas o que mais marcou foi como nos conhecemos melhor. Os Dates trouxeram  tanta felicidade e amor, foram tão especiais para mim, viraram momentos que vou guardar no coração para sempre.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "Longe, Mas Próximos", 
    mensagem: "Esse mês, você ficou alguns dias na roça, e esses dias, só me fizeram perceber o quanto eu amo sua presença, senti muito a sua falta. Senti uma saudade gigante nesses dias, porque eu não tinha a sua companhia para tornar o meu dia melhor, mas quando a gente conseguiu se falar de novo, foi maravilhoso, tivemos callzinhas, e cada segundo foi muito bom.",  
    mensagem2: "A resenha com seus amigos foi legal, até curti fazer o slide no fim (apesar das reclamações), foi divertido, por mais que eu tenha sido um pouco chato.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "Mais Que Férias, Amor", 
    mensagem: "Esse sétimo mês foi muito pika, porque a gente passou muito mais tempo juntinhos, curtindo as férias e aproveitando a companhia um do outro. Ter você no meu aniversário foi o melhor presente que eu poderia querer.",  
    mensagem2: "O presente incrível que você fez foi incrível e me mostrou, mais uma vez, o quanto você se importa comigo. Esses dias juntos foram especiais, poder passar várias horas com você, rir, conversar, aproveitar o tempo sem preocupações ... foi muito bom.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "Eu  Erreeeeiiiiii", 
    mensagem: "Nesse oitavo mês, a gente acabou discutindo um pouco, mas conversamos, entendemos um ao outro e encontramos um jeito de resolver as coisas, o que eu adoro no nosso relacionamento, que nunca deixamos isso nos abalar e sempre e ficamos bem. ",  
    mensagem2: "Acabei sendo bem negligente com você meu amor, não te dando o cuidado e a atenção que você merece, me desculpa amor. Não foi um dos melhores meses, mas conseguimos supera-lo e continuamos crescendo juntos.",
    mensagem3: "",
    mensagem4: "",
  },
  
  { titulo: "Desculpas e Gratidão", 
    mensagem: "Nesse nono mês, percebi o quanto já vivemos juntos — risadas, desafios e muito amor. Sei que em alguns momentos eu fiquei meio distante, preso nos meus pensamentos e não me abrindo com você, e acabei fazendo merda, e não demonstrei o carinho que você merece, me desculpa por ter te causado alguma insegurança, Mas saiba que te amo demais e nunca quis te deixar insegura.",  
    mensagem2: "Tenho que te agradecer também, porque seu cuidado comigo, tipo quando fiquei fodido de dor nas costas,  você tirou um tempo para me ajudar, foi um gesto tão fofo, que significou muito para mim. Só me faz ter mais certeza de que estar com você é a melhor coisa que me aconteceu.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "Novas Experiências e Amor", 
    mensagem: "Esse décimo mês foi diferente de todos os outros. Toda vez que a gente se encontrou, fizemos algo novo e fora da rotina — fritamos batata, fizemos ovos de Páscoa, preparamos hambúrguer… E, fazer essas coisa com você, deixou tudo incrível.",  
    mensagem2: "Foi mal ter escondido aquele problema de você por tanto tempo. Eu devia ter confiado mais em nós dois e te contado antes. Mas fico muito feliz que, mesmo com isso, a gente conseguiu conversar e resolver tudo de uma forma simples, mostrando que o problema não era tão grande quanto eu imaginava.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "Amor Simples e Forte", 
    mensagem: "Esse mês eu não consegui te encher de presentes como eu gostaria, mas tentei, de coração, te mostrar o quanto você é especial pra mim. Te dei aquele gloss porque, além de te deixar ainda mais linda, é uma delícia poder beijar e tirar ele de você toda vez que a gente se encontra.",  
    mensagem2: "Aquele dia na missa foi marcante, principalmente pela mensagem sobre como os conflitos fazem parte e ajudam a fortalecer o casal. Isso me fez pensar no quanto quero seguir ao seu lado, crescendo, aprendendo e aproveitando cada momento, sejam eles leves ou difíceis.",
    mensagem3: "",
    mensagem4: "",
  },

  { titulo: "1 Ano de Amor", mensagem: "Chegamos até aqui e quero mais mil anos contigo." }
];

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
        <h2 style="font-family: 'Great Vibes', cursive; text-align: center; color: #333; font-size: 2.2rem; margin-bottom: 15px;">${conteudo.titulo}</h2>
        <p style="font-size: 1.6rem; text-align: justify; color: #333;">${conteudo.mensagem}</p>
        <p style="font-size: 1.6rem; text-align: justify; color: #333;">${conteudo.mensagem2}</p>
        <p style="font-size: 1.6rem; text-align: justify; color: #333;">${conteudo.mensagem3}</p>
        <p style="font-size: 1.6rem; text-align: justify; color: #333;">${conteudo.mensagem4}</p>

      `;
      cartinhaConteudo.style.display = "block";
      cartinhaConteudo.dataset.numero = numero; // Guarda qual cartinha foi aberta
    }
  }
});