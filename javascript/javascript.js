//declarando variaveis
var ul = document.querySelector('#ul');
var btn = document.querySelector('#button-addon2');
var input = document.querySelector('#input');
var arrayTeles = [];
var numeroTeles = document.querySelector('#numeroTele');

//Adicionando função para adicionar as entregas à lista
function adicionaTelenaLista() {
  //recebendo valor que foi digitado
  var tele = input.value;
  //criando elemento li
  let li = document.createElement('li');
  li.setAttribute('class', 'list-group-item fonte');
  //pondo as teles em um array
  arrayTeles.push(li.value);
  //pegando o numero de itens no array para ter a quantidade
  var numero = arrayTeles.length;
  li.innerHTML = `<strong>${numero}° ${tele}<strong>`;
  //adicionando li com valor no ul
  ul.appendChild(li);


  //limpando campo input
  input.value = '';





}

//adicionando aexecução da função ao clique do botão
btn.onclick = adicionaTelenaLista;

// Proximo passo é por o numero de entregas e calcular o valor
// ajustar as fontes e tamanhos
// ver sobre armazenar lista em localstorage