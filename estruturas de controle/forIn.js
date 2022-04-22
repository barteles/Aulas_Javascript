const notas = [6.6, 7.7, 2.3, 9.8, 8.1, 5]

for (i in notas){
    console.log(i, notas[i])
}
// aqui o i retorna o índice e não o valor dentro do array

// usando FOR IN em objetos
const pessoa = {
    nome: 'Ana',
    sobrenome: 'da Sila',
    idade: 24,
    peso: 64
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}