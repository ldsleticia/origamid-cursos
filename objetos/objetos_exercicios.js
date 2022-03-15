// Crie um objeto com seus dados pessoais e que mostre
// seu nome completo
let pessoa = {
  nome: "Letícia",
  sobrenome: "Santos",
  idade: 25,
  nomeCompleto(nome, sobrenome) {
    return `${this.nome} ${this.sobrenome}`
  }
}

// Modifique o valor da propriedade preco para 3000
let carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
}

carro.preco = 3000

// Crie um objeto cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  lateAoVerHomem: true,
}

let cachorro2 = {
  raca: String,
  cor: String,
  idade: Number,
  lateAoVerHomem: Boolean,
}

let cachorro3 = {
  raca: String,
  cor: String,
  idade: Number,
  latir(pessoa){
    if(pessoa === "homem"){
      return "latir"
    }
  }
}

// console.log(cachorro2.raca("labrador"));
// console.log(cachorro2.cor("preto"));
// console.log(cachorro2.idade(10));
// console.log(cachorro2.lateAoVerHomem(true));