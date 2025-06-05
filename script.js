var posicaoAnterior = window.pageYOffset;

var header = document.querySelector("header");

var headerBottom = header.offsetTop + header.offsetHeight;

const jsonData = `[
  {
    "nome": "Rafael",
    "apelido": "pato",
    "idade": 19,
    "tempo": 5
  },
  {
    "nome": "Wadson",
    "apelido": "Steel",
    "idade": 20,
    "tempo": 5
  },
  {
    "nome": "Diego",
    "apelido": "Oxhello",
    "idade": 21,
    "tempo": 4
  },
  {
    "nome": "Arthur",
    "apelido": "Kanee",
    "idade": 15,
    "tempo": 1
  },
  {
    "nome": "Pedro",
    "apelido": "Doguinho",
    "idade": 17,
    "tempo": 3
  }
  ]`;

window.onscroll = function() {
  var posicaoAtual = window.pageYOffset;
  if (posicaoAnterior > posicaoAtual  || posicaoAtual < headerBottom){  
      header.style.top = "0";
  }
  else{
      header.style.top = "-7.2rem";
  } 
  posicaoAnterior = posicaoAtual;
}