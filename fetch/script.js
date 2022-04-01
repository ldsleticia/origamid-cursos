const doc = fetch('./doc.txt')

doc.then((resolucao) => {
    return resolucao.text();
}).then((body) => {
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body
})

const cep = fetch('https://viacep.com.br/ws/03204010/json/')
cep.then(r => r.json()).then(body => {
    const logradouro = document.querySelector('.cep')
    logradouro.innerText = body.logradouro
})