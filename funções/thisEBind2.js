function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}

new pessoa

/*
function pessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    },1000)
}
*/


/* no caso acima, o this estava apontando para a execução do setInterval e
não para a função pessoa, por isso só retorna NaN, para contornar isso, pode-se
passar o bind no final ou então criar uma constante chamada self e instanciar
this para ela, exp:

function pessoa() {
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    },1000)
}
*/

/* Aqui será usado o bind para travar o this e aponta-lo para pessoa

function pessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}
*/