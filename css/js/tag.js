const color = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: 'x#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase()  
     /* para salvar as tags em lower case */
    

     elemento.style.borderColor = color.get(tagName)

     if(!elemento.classList.contains('nolabel')){
         //  há um 'nolabel' no seu elemento? Caso seja falso, ele irá 
        // executar o if
         const label = document.createElement('label')
        /* vocÊ pode criar um elemento ou tag diretamente pelo JS */
        label.style.backgroundColor= color.get(tagName)
        label.innerHTML= tagName
        elemento.insertBefore(label, elemento.childNodes[0])
     }
})
/* para selecionar um elemento que aparece diversas vezes no seu código e
modifica-lo de uma única vez igual para todos os lugares onde ele aparece
basta usar a tecla de atalho CTRL + D */