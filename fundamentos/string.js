const escola = 'Cod3r'

console.log(escola.charAt(4))   //trará a letra que está no indice 4
console.log(escola.indexOf(3))  //trará o indice associado ao 3 procurado
// na string

//para quebrar a string em substrings
console.log(escola.substring(1)) //fará uma substring a partir do incide 1
console.log(escola.substring(0,2)) // a substr vai de 0 a 2, sem contar o 2

//concatenando strings
console.log('Escola '.concat(escola).concat('!'))

//função que faz trocas na string
console.log(escola.replace(3, 'e')) //substua 3 por e no Cod3r
console.log(escola.replace(/\w/g, 'e'))  //substitua todas as letras da str
// por 'e'
console.log(escola.replace(/\d/g, 'e'))  //substitua todos os digitos da str
// por 'e'

//para separar usando .split()
console.log('Ana,Maria,Vitória'.split(',')) //vai gerar um array separando 
//cada nome