// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll("img");
console.log(imgs);

// Retorne no console apenas as imagens que começarem com a palavra imagem
const img = document.querySelectorAll('[src^="./img/imagem"]');
console.log(img);

// Selecione todos os links internos
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descrição
const h2Animais = document.querySelector(".animais-descricao h2");
console.log(h2Animais.innerText);

// Selecione o último p do site
const ultimoP = document.querySelector("footer p:last-child");
console.log(ultimoP.innerText);

// forEach()
img.forEach(function (item) {
  console.log(item);
});

imgs.forEach((item) => {
  console.log(item);
});

// Mostre no console cada parágrafo do site
const p = document.querySelectorAll("p");
p.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
p.forEach((item) => {
  console.log(item.innerText);
});

// Corrija os códigos
// imgs.forEach(item, index => {
//     console.log(item, index)
// })
imgs.forEach((item, index) => {
  console.log(item, index);
});

// let i = 0
// imgs.forEach( => {
//     console.log(i++)
// })
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
