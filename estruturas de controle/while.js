function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    /* como random é um número aleatório entre 0 e 1, caso dê 0, a multiplicação
    dá 0 e volta somente o Mínimo, caso dê 1, ele fará a diferença entre o 
    mín e o máx, e somará com o max, retornando o valor máximo */
}
let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opcao escolhida foi ${opcao}.`)
    /* para aparecer cada iteração, deve ser aberto o console.log com 
    crase no lugar das aspas */
}
console.log('Até a próxima!')
