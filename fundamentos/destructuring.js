//maneira simples de acessar os atributos de objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua Aurora',
        numero: 156
    }
}

const {nome, idade} = pessoa //inicia-se com abertura de {} e depois estancia
//os atributos que quer pegar e depois do '=' você informa de onde irá
//tirar as informações
console.log(nome, idade)

//para facilitar, pode se usar ALIAS
const{nome: n, idade: i} = pessoa   //para fazer alias, basta usar ':'
console.log(n,i)

//atributos dentro de atributos
const {endereco: {logradouro, numero, cep}} = pessoa /*aqui não foi criado
o atributo cep, portanto retornará undefined */
console.log(logradouro, numero, cep)