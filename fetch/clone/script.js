const cep = fetch('https://viacep.com.br/ws/03204010/json/')


cep.then(r => {
    const r2 = r.clone();
    r.text().then((text) => {
        console.log(text);
    })
    r2.json().then((json) => {
        console.log(json)
    })
})