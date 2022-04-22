let contador =1 
while (contador <= 10) {
    console.log(`contador ${contador}`)
    contador++
}

//criando a mesma estrutura como o laço FOR
for (let i=1; i<= 10; i++){
    console.log(`i =  ${i}`)
}
/* para o laço FOR, primeiro vc passa a variável, depois a condição de parada
e por ultimo vem o incremento, todos separados por ';' */

const notas = [6.6, 7.7, 2.3, 9.8, 8.1, 5]
for (i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}