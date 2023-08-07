function printarMatriz(matriz, titulo) {
    console.log("=== "+titulo+" ===");
    console.log("=====================================");
    matriz.forEach(element => {
        console.log(element);
    });
    console.log("=====================================");
}

function criarMatriz(length) {
    return new Array(length).fill(0).map(() =>
        new Array(length).fill(0).map(() => Math.floor(Math.random() * 10))
    );
};

export {printarMatriz, criarMatriz}