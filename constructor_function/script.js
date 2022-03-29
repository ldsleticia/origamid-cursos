function Dom(seletor) {
    this.element = function () {
        return document.querySelector(seletor)
    }
    this.ativar = function () {
        this.element().classList.add('ativar')
    }
}

const li = new Dom('li')

function Pessoa(nome, idade, andar) {
    this.nome = String,
        this.idade = Number,
        this.andar = Boolean
}

let joao = new Pessoa
joao.nome = 'Joao'
joao.idade = 20
joao.andar = true

let maria = new Pessoa
maria.nome = "maria"
maria.idade = 25
maria.andar = true

let bruno = new Pessoa
bruno.nome = "bruno"
bruno.idade = 15
bruno.andar = true