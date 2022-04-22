const funcs = []

for(let i = 0; i<10; i++) {
    funcs.push(function () {    //lembrando que push é o mesmo que append 
        console.log(i)          //do Python
    })
}
funcs[2]()  //aqui invoco a função no indice 2
funcs[8]()

/*o LET tem 'memória', então caso eu queira elaborar uma lista com
diversos valores sendo adicionados dentro de um loop
como eu faria no Python, preciso declarar a variável usando o LET 
 e não o VAR */