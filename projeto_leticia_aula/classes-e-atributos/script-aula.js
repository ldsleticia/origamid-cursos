// Adicione a classe ativo a todos os itens do menu
let itensMenu = document.querySelector('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
let itensMenuRemove = document.querySelector('.menu a');
itensMenuitensMenuRemove.forEach((item) => {
    item.classList.remove('ativo')
})

itensMenuitensMenuRemove[0].classList.add('ativo')


// Verifique se as imagens possuem o atributo alt
let imagensComAlt= document.querySelectorAll('img')
imagensComAlt.forEach((img) => {
    img.hasAttribute('alt')
})

// Modifique o href do link externo no menu
let link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/')