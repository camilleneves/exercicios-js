//4. Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("Digite um numero para ver na tabuada: "))

if (!isNaN(numero)) {
    for (let cont = 0; cont <= 10; cont++) {
        console.log(numero + "X" + cont + "=" + (numero * cont));
    }
}
else{
    console.log ("Numero invalido. Por favor, digite um numero.")
}






