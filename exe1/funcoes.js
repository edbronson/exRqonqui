function valoresNum(){
    var num = 1
    var soma = 0
    var menorValor = valor;

    while(num <= 5){
        var valor = prompt("Digite um número"); 
        soma = parseInt(valor) + parseInt(soma);
        num++;
    }
    alert(`A soma dos valores do número é: ${soma}`);
}