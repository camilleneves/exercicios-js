//for - loop contato


// Contanto de 0 a 10
//contagem regressiva
//for(let cont = 10; cont >= 0; cont--){
    //console.log(cont);
//}

//While - loop condicional
//let salario = 1000;

//while (salario < 5000){
//Salario = salario +100;
// salario += 100;
//console.log("O salario ainda e R$" + salario)
//}

//Do while - loop condicional
//let saldo = 1000

//do{
// console.log("Esse e o saldo" + saldo)
//saldo += 100

//} while (saldo < 5000)


//Array

let fruta = ["Banana", "Laranja", "Maca", "Pitaya", "Melancia"]

//console.log(fruta [3])

fruta.forEach(fruta => {
    console.log("A fruta e: " + fruta)
})

for (let indice = 0; indice < 5; indice++) {
    console.log(fruta[indice])
    if (fruta[indice] == "Pitaya") {
        console.log("Eu gosto de " + fruta[indice])
    }
}