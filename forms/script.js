// console.log(document.forms); //todos os formulários

// console.log(document.forms.contato); //formulários com nome contato

// console.log(document.forms.contato.elements); // elementos

// console.log(document.forms[0].elements[0].value); // valor do primeiro elemento do primeiro formulário

// const contato = document.querySelector('#contato')
// console.log(contato.elements);
// console.log(document.forms[0]);

const form = document.getElementById('contato');
const texto = document.querySelector('.texto')
function handleKeyUp(event) {
    texto.innerText = event.target.value
}

// form.addEventListener('keyup', handleKeyUp)
form.addEventListener('change', handleKeyUp)