function saudacao() {
    let nomePessoa = prompt ("Digite seu nome: ")
    
    let horaAtual = new Date() .getHours()
    
    if(horaAtual > 6 && horaAtual < 13){
        window.alert("Bom dia " + nomePessoa)
    }
    else if (horaAtual >= 13 && horaAtual < 18){
        window.alert("Boa Tarde " + nomePessoa)
    }
    else {
        window.alert("Boa Noite " + nomePessoa)
    
    }

}





function somar(num1,num2, num3){
    let soma = num1 + num2 + num3
    return soma
}

//let resultado = somar(5, 6, 9)
//console.log("O resultado e: " + resultado)

//Exemplos de funcoes
//window.alert("TExto")
//console.log("Texto")
//window.prompt("Texto")

//exemplo objeto

let professor ={
    nome:"Thiago",
    sobrenome: "Nascimento",
    idade: 25

}