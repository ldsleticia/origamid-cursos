// Verificar se o valor é Truthy
function isTruthy(dado){
  return !!dado;
}

// Crie uma funcao que retorne o perimetro de um quadrado
function perimetroQuadrado(lado){
  return lado * 4;
}

// Crie uma funcao que retorne seu nome completo
function nomeCompleto(nome, sobrenome){
  console.log(`${nome} ${sobrenome}`);
}

// retorna undefined porque não há nome escrito
// addEventListener('click', nomeCompleto);

// Crie uma funcao que verifica se o numero é par.
function ehPar(numero){
  if (numero % 2 === 0){
    return true
  } else {
    return false
  }
}

// Crie uma funcao que retorna o tipo de dado
function qualOTipo(dado){
  return typeof(dado)
}
