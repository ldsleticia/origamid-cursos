const animaisSection = document.getElementById('animais')
const lista = document.getElementsByTagName('ul')
const paragrafo = document.getElementsByClassName('lorem')
const contato = document.querySelectorAll('.contato')
const primeiraLi = document.querySelector('li')
const link = document.querySelector('[href^="#"]')

contato.forEach(function(item, index) {
    console.log(item, index)
})


console.log(animais.innerText)
console.log(lista[0])
console.log(paragrafo[0])
console.log(contato)
console.log(primeiraLi)
console.log(link)

// se você selecionar algo que não existe, ele retorna null
// para encontrar o que começa com, usamos o ^
// com o get criamos uma HTMLCollection
// com os querySelector criamos uma NodeList