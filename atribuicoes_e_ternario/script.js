// Some 500 ao valor de scroll
let scroll = 1000;
scroll += 500;

// Atribua true oara a variável darCrédito caso o cliente tenha carro e cara
let possuiCarro = true;
let possuiCasa = true;
let darCredito;

if (possuiCarro == true && possuiCasa == true) {
    darCredito = true
} else {
    darCredito = false
}

let darCredito2;
darCredito2 = (possuiCarro && possuiCasa);

// O if e else volta undefined caso não haja condição do else
console.log(darCredito)

// O ternário da false mesmo sem a condição do else
console.log(darCredito2)