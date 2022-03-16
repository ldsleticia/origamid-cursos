const href = window.location.href

console.log(href)

let h1Selecionado = document.querySelector('h1');

h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em', h1Selecionado)
})

h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em', h1Selecionado.innerText)
})