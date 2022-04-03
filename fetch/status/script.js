// const cep = fetch('https://viacep.com.br/ws/03204010/json/')

// cep.then(response => {
//     console.log(response.status)
//     if(response.status === 200) {
//         console.log('pagina encontrada')
//     } else if(response.status === 404){
//         console.log('página não encontrada')
//     } else {
//         console.log('condições ainda não testadas')
//     }
// })

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulário onde o usuário
// pode digitar o cep e o endereço completo é retornado ao clicar
// em buscar

let inputCep = document.getElementById("cep");
let btnCep = document.getElementById("btnCep");
let resultadoCep = document.querySelector(".resultadoCep");

btnCep.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      resultadoCep.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker retorne no DOM
// o valor de compra da bitcoin em reais
// atualize esse valor a cada 30 s

let btcDisplay = document.querySelector(".btc");

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((btcJson) => {
      btcDisplay.innerText = `R$ ${btcJson.BRL.buy}`.replace(".", ",");
    });
}

//setInterval(fetchBtc, 1000 * 30)

fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random retorne
// uma piada randomica do chicknorris toda vez que clicar em próximo

let piada = document.querySelector(".piada");
let btnProximo = document.getElementById("proximo");


function piadaChuckNorris() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((piadaJson) => {
      piada.innerText = `${piadaJson.value}`;
    });
}

btnProximo.addEventListener("click", piadaChuckNorris);

piadaChuckNorris();

// function handleClick(event) {
//   event.preventDefault();
//   const trocaPiada = btnProximo.value;
//   piadaChuckNorris();
// }

