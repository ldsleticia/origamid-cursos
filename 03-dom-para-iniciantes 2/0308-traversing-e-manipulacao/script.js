//  Seleciona o primeiro H1 da página
const h1 = document.querySelector('h1'); 

h1.innerHTML = '<p>Novo título</p>'

// menu.outerHTML: tras todo o html do menu
// menu.innerHTML: tras apenas o conteudo do menu. A tag vai como texto
// menu.innerText: tras apenas o texto do menu, sem tags. A tag é renderizada