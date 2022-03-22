let menu = document.querySelector('.menu');
menu.classList.add('ativo');
menu.classList.remove('azul');


if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

let animais = document.querySelector('.animais');

let img = document.querySelector('img')
img.getAttribute('alt') // pega o alt
img.setAttribute('alt', 'É uma raposa') //altera o alt
img.hasAttribute('alt') // possui alt?

console.log(menu.classList)

console.log(animais.attributes.class)

console.log(animais.attributes['data-texto'])

console.log(img.getAttribute('src'))