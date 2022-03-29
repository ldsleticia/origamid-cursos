// function espera(texto) {
//     console.log(texto);
// }

// setTimeout(espera, 1000, 'Depois de 1s')

// setTimeout(() => {
//     console.log('Testando')
// }, 2000);

// for (let i = 0; i < 20; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 * i)
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', handleClick);

// function handleClick() {
//     setTimeout(() => {
//         this.classList.add('active')
//         console.log(btn)
//     }, 1000)
// }

// function loop(texto) {
//     console.log(texto);
// }
// setInterval(loop, 1000, 'Passou 1s')

// let i = 0;
// const meuLoop = setInterval(() => {
//     console.log(i++)
// if(i > 20) {
//     clearInterval(meuLoop)
// }
// }, 1000)

// function mudarClasse(){
//     document.body.classList.toggle('active');
// }

// setInterval(mudarClasse, 2000)


const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0;
let timer;

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerText = i++
    }, 400)
    iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
    clearInterval(timer)
    iniciar.removeAttribute('disabled', '')
}

function resetarTempo() {
    tempo.innerText = 0
    i = 0
}