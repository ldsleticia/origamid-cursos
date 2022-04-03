const cep = fetch('https://viacep.com.br/ws/03204010/json/')


cep.then(response => {
    console.log(response)
    response.headers.forEach(console.log)
})