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
