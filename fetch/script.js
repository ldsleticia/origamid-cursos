// const doc = fetch('./doc.txt')

// doc.then((resolucao) => {
//     return resolucao.text();
// }).then((body) => {
//     const conteudo = document.querySelector('.conteudo')
//     conteudo.innerText = body
// })

// const cep = fetch('https://viacep.com.br/ws/03204010/json/')
// cep.then(r => r.json()).then(body => {
//     const logradouro = document.querySelector('.cep')
//     logradouro.innerText = body.logradouro
// })

// const sobre = fetch('./sobre.html');

// const div = document.createElement('div');

// sobre.then(r => r.text()).then(body => {
//     div.innerHTML = body
//     const titulo = div.querySelector('h1');
//     document.querySelector('h1').innerText = titulo.innerText;
// })

const div = document.createElement('div');

fetch('./sobre.html')
    .then(response => response.text())
    .then(htmlBody => {
        div.innerHTML = htmlBody;
        const titulo = div.querySelector('h1'); document.querySelector('h1').innerText = titulo.innerText;
    });