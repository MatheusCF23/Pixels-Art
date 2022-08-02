//preciso pegar um elemento e atribuir a ele a class 'selected'

function colorSelected() {
  let color = document.querySelector('.color');
  
  color.classList.add('selected');

}
colorSelected();


//Desafio 7

let x = document.getElementById('color-palette');
function mudarCor (parametro) {
  let selected = document.querySelector('.selected')
  selected.classList.remove('selected')
  parametro.target.classList.add('selected')
}

x.addEventListener('click', mudarCor)