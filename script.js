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

const objeto = JSON.parse(jsonData);
var max = objeto.length - 1;
var indice = 0;
const btnDireita = document.getElementById("btndireita");
const btnEsquerda = document.getElementById("btnesquerda");

function carregarDados(){
  document.getElementById("resultado").innerText =
   `Nome: ${objeto[0].nome} \n
    Apelido: ${objeto[0].apelido} \n
    Idade: ${objeto[0].idade} \n
    Tempo: ${objeto[0].tempo}`;
}

function avancarDados(){
  indice++;
  if(indice > max){
  indice = 0;
  }
  document.getElementById("resultado").innerText =
   `Nome: ${objeto[indice].nome} \n
    Apelido: ${objeto[indice].apelido} \n
    Idade: ${objeto[indice].idade} \n
    Tempo: ${objeto[indice].tempo}`;
}

function voltarDados(){
  indice--;
  if(indice < 0){
  indice = max;
  }
  document.getElementById("resultado").innerText = `Nome: ${objeto[indice].nome} \n
  Apelido: ${objeto[indice].apelido} \n
  Idade: ${objeto[indice].idade} \n
  Tempo: ${objeto[indice].tempo}`;
}

carregarDados();
btnDireita.addEventListener('click', avancarDados);
btnEsquerda.addEventListener('click', voltarDados);

var posicaoAnterior = window.pageYOffset;

var header = document.querySelector("header");

var headerBottom = header.offsetTop + header.offsetHeight;

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