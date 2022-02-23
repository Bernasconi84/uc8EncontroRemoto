var numTotalAlunos = 81;  //Por gentileza insira o número de alunos
var contador = 0;
var numero;

while (contador < numTotalAlunos) {
    console.log(`Alunos ${contador}`)
contador++;    
}
    if (numTotalAlunos === 0) {
        return console.log("O número é zero");
    } else if (numTotalAlunos !== 0) {
        numero = numTotalAlunos % 2
    } if (numero === 0) {
        console.log(`Temos ${numTotalAlunos} alunos, número par! `);
    } else {
        console.log(`Temos ${numTotalAlunos} alunos, número ímpar! `)

    }


