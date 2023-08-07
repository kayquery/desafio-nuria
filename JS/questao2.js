import { printarMatriz } from "./base.js";

const matrizA = [
    [1,2,3,1,2,2],
    [1,2,3,1,2,2],
    [1,2,3,1,2,3],
    [1,2,3,1,2,3],
]
const matrizB = [
    [1,2,3],
    [1,2,3],
]

main()



async function main(){
    let count = 0;

    printarMatriz(matrizA,"Matriz A")
    printarMatriz(matrizB,"Matriz B")

    for(let i = 0; i <= matrizA.length - matrizB.length; i++) {
        for(let j =0; j <= matrizA[0].length - matrizB[0].length; j++) {
            
            if(matrizA[i][j] == matrizB[0][0]) {
                const matrizResult = await obterSubmatriz(i, j, matrizA, matrizB);
                if( isMatrizEqual(matrizResult, matrizB) )
                    count++;

            }
        }
    }

    console.log("A matriz B cabe "+count+" vezes na matriz A");   
}

async function obterSubmatriz(i, j, matrizA, matrizB){
    let matriz = [];

    for(let ii = 0; ii< matrizB.length; ii++ ) {
        let matrizInside = [];
        for(let jj = 0; jj< matrizB[0].length; jj++) {
            matrizInside.push(matrizA[i+ii][j+jj])           
        }
        matriz.push(matrizInside);
    }
    return matriz;
}

function isMatrizEqual(matrizA, matrizB) {
    return JSON.stringify(matrizA) == JSON.stringify(matrizB)
}