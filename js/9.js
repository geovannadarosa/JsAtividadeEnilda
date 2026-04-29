function triangulo(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);


    if(num1 == num2 == num3){
        document.getElementById('resposta').innerText = "esse triangulo se chama equilátero e tem lados iguais";
    }
    else if(num1 == num2  || num1 == num3 || num2 == num3){
        document.getElementById('resposta').innerText = 'esse triangulo se chama isósceles e tem somente 2 lados iguais de 3 lados ';
    }
    else{
        document.getElementById('resposta').innerText = 'esse triangulo se chama escaleno e ele tem todos os lados diferentes';
    }
}