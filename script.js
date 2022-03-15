function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(3));

function imc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

console.log(imc(60, 1.6));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Gosto do céu";
  } else if (cor === "azul") {
    return "Gosto de grama";
  } else {
    return "Não gosto de cores";
  }
}

console.log(corFavorita("azul"));

addEventListener("click", function () {
  console.log("Oi");
});

function mostraConsole() {
  console.log("Fala ai");
}

addEventListener("click", mostraConsole);

function terceiraIdade(idade) {
  if (typeof idade != "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('oi'))

function precisaVisitar(paisesVisitados){
    let totalPaises = 193;
    return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}