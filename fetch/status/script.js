const cep = fetch('https://viacep.com.br/ws/03204010/json/')


cep.then(response => {
    console.log(response.status)
    if(response.status === 200) {
        console.log('pagina encontrada')
    } else if(response.status === 404){
        console.log('página não encontrada')
    } else {
        console.log('condições ainda não testadas')
    }
})