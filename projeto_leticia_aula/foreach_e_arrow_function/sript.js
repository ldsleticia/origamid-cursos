// const imgs = document.querySelectorAll('img')

// let i = 0;
// imgs.forEach(function(item, index, array) { 
//     console.log(item, index, array)
// });

// const titulos = document.getElementsByClassName('titulo');
// const titulosArray = Array.from(titulos)

// titulosArray.forEach((item) => {
//     console.log(item)
// });



// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach((item) => {
    console.log(item)
})

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText)
})

// Corrija os comandos abaixo:
// const imgs = document.querySelectorAll('img')
const imgs = document.querySelectorAll('img')

// imgs.forEach(item, index => {
//     console.log(item, index)
// })
imgs.forEach((item, index) => {
    console.log(item, index)
})

// let i = 0;
// imgs.forEach( => {
//     console.log(i++)
// });
let i = 0;
imgs.forEach( () => {
    console.log(i++)
});

imgs.forEach(() => i++)