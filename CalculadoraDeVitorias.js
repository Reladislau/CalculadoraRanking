console.log("Bem Vindo ao Programa de Calculadora")

for(i=1; i<2; i++){
    Calculadora(200, 9)
}


function Calculadora(Vitorias, Derrotas){
    let resultado = Vitorias - Derrotas
    let nivel

    if(resultado <=10){
        nivel = "Ferro"
        console.log("O Herói tem de saldo de " + resultado + " Vitórias, e está no nível de " + nivel)
    } else if (resultado >10 && resultado <=20){
        nivel = "Bronze"
        console.log("O Herói tem de saldo de " + resultado + " Vitórias, e está no nível de " + nivel)
    } else if (resultado >20 && resultado <=50){
        nivel = "Prata"
        console.log("O Herói tem de saldo de " + resultado + " Vitórias, e está no nível de " + nivel)
    } else if (resultado >50 && resultado <=80){
        nivel = "Ouro"
        console.log("O Herói tem de saldo de " + resultado + " Vitórias, e está no nível de " + nivel)
    } else if (resultado >80 && resultado <=90){
        nivel = "Diamante"
        console.log("O Herói tem de saldo de " + resultado + " Vitórias, e está no nível de " + nivel)
    } else if (resultado >90 && resultado <100){
        nivel = "Lendário"
        console.log("O Herói tem de saldo de " + resultado + " Vitórias, e está no nível de " + nivel)
    } else {
        nivel = "Imortal"
        console.log("O Herói tem de saldo de " + resultado + " Vitórias, e está no nível de " + nivel)
    }
}


