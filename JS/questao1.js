import {printarMatriz, criarMatriz} from './base.js'

const length = 6;

main();


function main() {
    const matriz = criarMatriz(length);
    printarMatriz(matriz, "Matriz Original");
    reverterDiagonais(matriz);
    printarMatriz(matriz, "Matriz Diagonais Invertidas");
}


function reverterDiagonais(matriz) {

    for (let i = 0; i <= length / 2 - 1; i++) {

        //diagonal 1
        let value = matriz[i][i];
        matriz[i][i] = matriz[length - 1 - i][length - 1 - i]
        matriz[length - 1 - i][length - 1 - i] = value;

        //diagonal 2
        value = matriz[i][length - 1 - i];
        matriz[i][length - 1 - i] = matriz[length - 1 - i][i];
        matriz[length - 1 - i][i] = value;
    }
}
