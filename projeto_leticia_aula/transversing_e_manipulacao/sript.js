const h1 = document.querySelector('h1')

h1.innerHTML

const lista = document.querySelector('.animais-lista')

lista.parentElement; // retorna o elemento pai
lista.parentElement.parentElement; // retorna o pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; //elemento abaixo
lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; //ultimo filho
lista.querySelectorAll('li') // todos os li
lista.querySelector('li:last-child') //ultimo filho