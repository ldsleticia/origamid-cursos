// let carros = ['ford', 'fiat', 'honda']

// carros.forEach((item, index, array) => {
//     carros[index] = 'teste'
//     console.log(item.toUpperCase, index, array)
// })

let li = document.querySelectorAll('li')

li.forEach((item) => {
    item.classList.add('ativa')
    return item
})