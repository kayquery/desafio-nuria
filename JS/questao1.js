
const length = 6;

main();


function main(){
    const matriz = criarMatriz();
    console.log("========== Matriz Original ==========")
    printarMatriz(matriz);
    reverterDiagonais(matriz);
    console.log("==== Matriz Diagonais Invertidas ====")
    printarMatriz(matriz);
}
function criarMatriz() {
    return new Array(length).fill(0).map(() =>
        new Array(length).fill(0).map(() => Math.floor(Math.random() * 10))
    );
};

function printarMatriz(matriz) {
    console.log("=====================================");
    matriz.forEach(element => {
        console.log(element);
    });
}

function reverterDiagonais(matriz) {

    for(let i = 0; i <= length/2-1; i++) {
        
        //diagonal 1
        let value = matriz[i][i];
        matriz[i][i] = matriz[length-1-i][length-1-i]
        matriz[length-1-i][length-1-i] = value;

        //diagonal 2
        value = matriz[i][length-1-i];
        matriz[i][length-1-i] = matriz[length-1-i][i];
        matriz[length-1-i][i] = value;
    } 
}
