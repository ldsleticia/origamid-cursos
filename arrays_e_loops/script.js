// Crie um array com os anos em que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let anosGanhos = [1959, 1962, 1970, 1994, 2002]

// Interaja com o array utilizando um loop para mostrar a mensagem
// "O Brasil ganhou a copa de ${ano}"
anosGanhos.forEach(function(ano){
    console.log(`O Brasil ganhou a copa de ${ano}`)
});

// Inclua mais uma fruta no array
let frutas = ['banana', 'maçã', 'pêra', 'uva', 'melância']
frutas.push("Amora")
console.log(frutas)

// Faça com que o loop pare quando chegar em pera
for( let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
    if (frutas[i] === 'pêra'){
        break
    }
}

ultimaFruta = frutas[frutas.length -1]
console.log(ultimaFruta)