const funcs = []

for(var i = 0; i<10; i++) {
    funcs.push(function () {    //lembrando que push é o mesmo que append 
        console.log(i)          //do Python
    })
}
funcs[2]()  //aqui invoco a função no indice 2
funcs[8]()  // invoco a função no indice 8

/*
como var não tem escopo de bloco, o resultado será 10 para qualquer chaamda
feita nesse código
*/
