let promessa = new Promise((resolve, reject) => {
    let condicao = false
    if (condicao) {
        resolve('pronto')
    } else {
        reject()
    }
})

let retorno = promessa
    .then(resolucao => {
        console.log(resolucao)
        resolucao.profissao = 'desenvolvedora '
        return resolucao
    })
    .then(resolucao => {
        console.log(resolucao)
    })
    .catch(rejeitada => {
        console.log('aff')
    })

console.log(retorno)