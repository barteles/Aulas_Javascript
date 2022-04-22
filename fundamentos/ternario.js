// é quando se usa 3 operadores
// uniário é 1 operador, exemplo:  - a (deixando a negativo)
// binário: a += b ou a !=0, a==b

/* no operador ternário, a primeira parte (expressão relacional)
deve ser a lógica que deve sempre retornar verdadeiro ou falso. Caso dê 
verdadeiro,a parte seguinte deve ser retornada,caso dÊ falso retornará a
parte final.
O simbolo '?' separa a lógica da segunda e terceira parte, enquanto que o
simbolo ':' separa a segunda (true) da terceira parte (false) do operador.
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'


console.log(resultado(7.2))
console.log(resultado(6.7))