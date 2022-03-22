const animais = document.getElementById('animais');

// const gridSection = document.getElementsByClassName('grid-section')

// // Seleciona somente todos que tiverem as duas classes
// const contato = document.getElementsByTagName('grid-section contato')

// const primieiroUl = document.querySelector('ul')

// // O chapéu antes do igual significa que começa com
// const linkInterno = document.querySelector('[href^="#"]')

// const animaisImg = document.querySelectorAll('.animais')

// const gridSectionNode = document.querySelectorAll('.grid-section')
// gridSectionNode.forEach(function(item, index){
//     console.log(item, index)
// })


// const gridSectionHTML = document.getElementsByClassName('grid-selection')
// // Transforma um array-like em um array estático
// const arrayGrid = Array.from(gridSectionHTML);

// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começam com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensAnimais);

// Selecione os links internos(onde href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2")
console.log(h2Animais)

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p')
const ultimoParagrafo = paragrafos[paragrafos.length - 1]
console.log(ultimoParagrafo)