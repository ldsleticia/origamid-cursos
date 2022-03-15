let pessoa = {
  nome: 'Letícia',
  idade: '25',
  profissao: 'Engenheira de Software',
  possuiFaculdade: true,
}

console.log(pessoa.nome)

let quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
console.table(quadrado)

let menu = {
  widith: 800,
  heigth: 50,
  metadeHeigth() {
    return this.heigth / 2;
  }
}
