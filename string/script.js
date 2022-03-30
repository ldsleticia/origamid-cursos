const listaItens = "camisa bone calca bermuda vestido saia"
const arrayItens = listaItens.split(" ")
console.log(arrayItens)

let preco = 'R$ 1200.43';
preco = preco.replace('.', ',')
console.log(preco)

const frutas = ['banana', 'melancia', 'laranja']
console.log(frutas.join('-'))

const htmlText = '<div>o melhor item</div><div>a melhor lista</div>'
const htmlArray = htmlText.split('div')
const novoHtml = htmlArray.join('section')
console.log(htmlText)
console.log(htmlArray)
console.log(novoHtml)