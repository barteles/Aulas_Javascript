//tem o objetivo de ser uma função com escrita reduzida e tem um This
//associado à ela diretamente (não varia)

//criando uma função normal:
let dobro = function (a) {
    return 2*a
}

//arrow function
dobro = (a) => {
    return 2 * a
}

//ou pode ser escrito:
dobro = a => 2 * a //quando se tira as chaves há o retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //aqui possuí um parâmetro
//(não precisa passar esse parametro para invocar a execução)
console.log(ola())