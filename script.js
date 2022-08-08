function criaTabela () {
  let paiTabela = document.getElementById('pixel-board');
  for(let i = 1; i <= 25; i += 1) {
    let div = document.createElement('div');
    div.className = 'pixel';
    paiTabela.appendChild(div);
  }
}
criaTabela();


//preciso pegar um elemento e atribuir a ele a class 'selected'
// Desafio 6

function colorSelected() {
  let color = document.querySelector('.color');
  color.classList.add('selected');
}

colorSelected();


//Desafio 7

let x = document.getElementById('color-palette');
function mudarCor(parametro) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  parametro.target.classList.add('selected');
}

x.addEventListener('click', mudarCor);

// Desafio 8

let t = document.getElementById('color-palette');
let y = document.getElementById('pixel-board');
let a = 'rgb(0, 0, 0)';

function resultado() {
  let preto = document.getElementsByClassName('color')[0];
  preto.classList.add('selected');
}
resultado();

function colorTrocar(parametro2) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  parametro2.target.classList.add('selected');
  let cor = window.getComputedStyle(selected);
  let corAdd = cor.getPropertyValue('background-color');
  return a = corAdd;
}
t.addEventListener('click', colorTrocar);

function addCor(parametro3) {
  parametro3.target.style.backgroundColor = a
}
y.addEventListener('click', addCor);


// Desafio 9
let z = document.getElementById('clear-board');

function limpar() {
  let selected = document.getElementsByClassName('pixel');
  for (let i = 0; i < selected.length; i += 1) {
    selected[i].style.backgroundColor = 'white';
  }
}
z.addEventListener('click', limpar);


// Desafio 10

//const boardSize = document.getElementById('board-size');












//Desafio 12

function createPaletteColors() {
  const colors = ['black'];
  const spanColor = document.querySelectorAll('.color');
  const lettersNumber = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 3; i += 1) {
    color = '#';
    for (let index = 0; index < 6; index += 1) {
      color += lettersNumber[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
  }

  for (let i = 0; i < spanColor.length; i += 1) {
    spanColor[i].style.backgroundColor = colors[i];
  }
  spanColor[0].classList.add('selected');
}
createPaletteColors();