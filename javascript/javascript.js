var ul = document.querySelector('ul');
var btn = document.querySelector('#button-addon2');
var input = document.querySelector('#input');


function adicionaTele() {

  var tele = input.value;
  console.log(tele);


}

btn.onclick = adicionaTele;