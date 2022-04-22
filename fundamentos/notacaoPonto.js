console.log(Math.ceil(6.1)) //ceil = arredondar para cima floor para baixo
console.log(Math.floor(5.7))

const obj1 = {} //função vazia
obj1.name =  'Bola' //colocando um parâmetro no objeto obj1
//pode ser feito do tipo obj1['nome'] = 'Bola'
console.log(obj1.name)

function Obj(nome){
    this.nome  = nome
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Cadeira')

console.log(obj2.nome)
console.log(obj3.nome)