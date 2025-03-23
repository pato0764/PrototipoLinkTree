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