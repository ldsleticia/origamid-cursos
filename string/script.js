// const listaItens = "camisa bone calca bermuda vestido saia"
// const arrayItens = listaItens.split(" ")
// console.log(arrayItens)

// let preco = 'R$ 1200.43';
// preco = preco.replace('.', ',')
// console.log(preco)

// const frutas = ['banana', 'melancia', 'laranja']
// console.log(frutas.join('-'))

// const htmlText = '<div>o melhor item</div><div>a melhor lista</div>'
// const htmlArray = htmlText.split('div')
// const novoHtml = htmlArray.join('section')
// console.log(htmlText)
// console.log(htmlArray)
// console.log(novoHtml)

const transacoes = [
    {
        descricao: 'taxa do pao',
        valor: 'R$ 39'
    },
    {
        descricao: 'taxa do mercado',
        valor: 'R$ 129'
    },
    {
        descricao: 'recebimento de cliente',
        valor: 'R$ 99'
    },
    {
        descricao: 'taxa do banco',
        valor: 'R$ 129'
    },
    {
        descricao: 'recebimento do cliente',
        valor: 'R$ 49'
    },
]

let taxaTotal = 0;

transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$', '')
    //+ na frente de uma string que é só numero, transforma em numero
    if (item.descricao.startsWith('taxa')) {
        taxaTotal = taxaTotal + numeroLimpo
    } //nesse caso comeca com taxa
})

console.log(taxaTotal)

// Retorne uma array com a lista abaixo
const transporte = 'carro;aviao;trem;onibus;biciclieta'
const arrayItens = transporte.split(";")
console.log(arrayItens)

// Substitua todos os span's por a's
let html = `<ul>
             <li><span>Sobre</span></li>
             <li><span>Produtos</span></li>
             <li><span>Contato</span></li>
             </ul>`;


html = html.split('span').join('a')
console.log(html)

// Retorne o último caractere da frase
let frase = 'Melhor do ano!'
let ultima = frase[frase.length - 1] // Dessa forma mostra o último caractere
let comSlice = frase.slice(-1)
console.log(ultima)
console.log(comSlice)

// Retorne o total de taxas
let transacoes2 = [
    'taxa do pao', 
    'taxa do mercado', 
    'recebimento de cliente', 
    'taxa do banco', 
    'recebimento do cliente'
]

let taxasTotal = 0;
transacoes2.forEach((item) => {
    item = item.toLowerCase().trim()
    if(item.startsWith('taxa')){
       taxasTotal++
    }
})

console.log(taxasTotal)

let valor = 48.49
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor)