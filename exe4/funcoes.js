function valoresNum(){
    var idade = prompt("Qual sua idade?");

    if(idade >= 18){
        alert('Profissional');

    } else if(idade >= 15 && idade < 18){
        alert('Quase profissional');

    } else if(idade >= 12 && idade < 15){
        alert('Aspirante a quase profissional');
        
    } else{
        alert('Dente de leite');
    }
}