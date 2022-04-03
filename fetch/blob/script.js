const imagem = fetch('./imagem.png')

imagem.then(r => r.blob()).then(body => {
    const blobUrl = URL.createObjectURL(body)
    console.log(blobUrl)
    const imagemDom = document.querySelector('img')
    imagemDom.src = blobUrl
})