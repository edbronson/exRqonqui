function categoria(){
    var quantidade = prompt("Quantos valores você irá digitar?");
    var num = 1;
    var soma = 0
    
    do{
        var valor = prompt("Digite um valor:")
        soma = parseInt(valor) + parseInt(soma);
        console.log(soma);

        if(num == 5){
           var media = soma/5;
           console.log(media);

           if(media > 30){
            alert("Talvez os números digitados sejam acima de 5");

        } else{
            alert("Talvez os números digitados são igual ou menor que cinco.");
        }
        }
        num++
        
    }while(num <= quantidade)
}