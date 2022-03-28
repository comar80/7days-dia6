var listaFrutas = [];
var listaLaticinio = [];
var listaCongelados = [];
var listaDoces = [];

// Limpa a página para construção do novo HTML
function cleanMain(name) {
  document.getElementById("main").innerHTML = "";
}

function Nao() {
  window.location.href = "http://www.pudim.com.br/";
}

function Sim() {
  cleanMain();

  var message = "";

  message += "<p class='page-subtitle'>Qual item você deseja inserir?</p>";
  message += "<div><input type='text' id='comida'></div>";
  message +=
    "<p class='page-subtitle'>Em qual categoria você deseja inserir?</p>";
  message +=
    "<div name='formradio'><input type='radio' name='radio' value='frutas' id='frutas'>Frutas";
  message +=
    "<input type='radio' name='radio' value='laticinio' id='laticinio'>Laticínio";
  message +=
    "<input type='radio' name='radio' value='congelados' id='congelados'>Congelados";
  message +=
    "<input type='radio' name='radio' value='doces' id='doces'>Doces</div>";

  message += "<br><button onclick='Inserir()'>Inserir</button>";

  document.getElementById("main").innerHTML = message;
}

function Sim2() {
  cleanMain();

  var message = "";

  message += "<p class='page-subtitle'>Qual item você deseja inserir?</p>";
  message += "<div><input type='text' id='comida'></div>";
  message +=
    "<p class='page-subtitle'>Em qual categoria você deseja inserir?</p>";
  message +=
    "<div name='formradio'><input type='radio' name='radio' value='frutas' id='frutas'>Frutas";
  message +=
    "<input type='radio' name='radio' value='laticinio' id='laticinio'>Laticínio";
  message +=
    "<input type='radio' name='radio' value='congelados' id='congelados'>Congelados";
  message +=
    "<input type='radio' name='radio' value='doces' id='doces'>Doces</div>";

  message += "<br><button onclick='Inserir()'>Inserir</button>";
  message += "<button onclick='removerComida()'>Remover</button>";
  message += "<button onclick='limparLista()'>Limpar</button>";

  document.getElementById("main").innerHTML = message;
}

function Inserir() {
  var comida = document.getElementById("comida").value;
  var frutas = document.getElementById("frutas");
  var laticinio = document.getElementById("laticinio");
  var congelados = document.getElementById("congelados");
  var doces = document.getElementById("doces");

  if (comida == "") {
    alert("Campo em branco");
  } else if (
    frutas.checked == false &&
    laticinio.checked == false &&
    congelados.checked == false &&
    doces.checked == false
  ) {
    alert("Escolha uma categoria");
  } else if (frutas.checked) {
    listaFrutas.push(comida);
  } else if (laticinio.checked) {
    listaLaticinio.push(comida);
  } else if (congelados.checked) {
    listaCongelados.push(comida);
  } else if (doces.checked) {
    listaDoces.push(comida);
  }

  listarNaTela();

  console.log(listaFrutas);
  console.log(listaLaticinio);
  console.log(listaCongelados);
  console.log(listaDoces);

  Sim2();
}

function listarNaTela() {
  var message = "";

  message += "<li class='lista'>Frutas: " + listaFrutas + "</li>";
  message += "<li class='lista'>Laticínios: " + listaLaticinio + "</li>";
  message += "<li class='lista'>Congelados: " + listaCongelados + "</li>";
  message += "<li class='lista'>Doces: " + listaDoces + "</li>";

  document.getElementById("lista").innerHTML = message;
}

function limparLista() {
  listaFrutas.splice(0);
  listaDoces.splice(0);
  listaCongelados.splice(0);
  listaLaticinio.splice(0);
  listarNaTela();
}

function removerComida() {
  var campoRemoverComida = document.getElementById("comida").value;

  if (listaFrutas.indexOf(campoRemoverComida) != -1) {
    listaFrutas.splice(listaFrutas.indexOf(campoRemoverComida), 1);
    alert(`O item ${campoRemoverComida} foi removido com sucesso!`);
  } else if (listaLaticinio.indexOf(campoRemoverComida) != -1) {
    listaLaticinio.splice(listaLaticinio.indexOf(campoRemoverComida), 1);
    alert(`O item ${campoRemoverComida} foi removido com sucesso!`);
  } else if (listaDoces.indexOf(campoRemoverComida) != -1) {
    listaDoces.splice(listaDoces.indexOf(campoRemoverComida), 1);
    alert(`O item ${campoRemoverComida} foi removido com sucesso!`);
  } else if (listaCongelados.indexOf(campoRemoverComida) != -1) {
    listaCongelados.splice(listaCongelados.indexOf(campoRemoverComida), 1);
    alert(`O item ${campoRemoverComida} foi removido com sucesso!`);
  } else {
    alert(`Não foi possível encontrar o item dentro da lista!`);
  }
  listarNaTela();
  
  document.getElementById("comida").value = ""; //limpar input
}