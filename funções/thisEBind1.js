/* this é um objeto que representa o contexto atual em que se está trabalhando.
This pode variar dependendo do contexto, uma hora aponta para um lugar,
e depois pode apontar para outro caso chamado novamente no código.

BIND: 'amarra' o contexto à uma determinada função.


const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() //há um conflito entre paradigmas: função e OO (orientação a objeto)

/* para resolver isso, será utilizado a função bind, que amarra um determinado
objeto como dono da execução daquele método sempre que ele for chamado */

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //o objeto pessoa se tornou o dono da execução do THIS