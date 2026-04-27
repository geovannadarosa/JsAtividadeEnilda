function idade(){
    let tipo = Number(document.getElementById("tipo").value);
    if(tipo < 0){
        document.getElementById('resposta').innerText = "esse numero é invalido, tente novamente";
    }

    else if(tipo <= 2){
        document.getElementById('resposta').innerText = " você é um bebê.";
    }
    else if(tipo <= 11){
        document.getElementById('resposta').innerText = " você é uma criança.";
    }
    else if(tipo <= 21){
        document.getElementById('resposta').innerText = "você é um jovem.";
    }
    else if(tipo <= 64){
        document.getElementById('resposta').innerText = "você é adulto.";
    }
    else if(tipo <= 100){
        document.getElementById('resposta').innerText = "você e um idoso.";
    }
    else{
        document.getElementById('resposta').innerText = "você é muito idoso.";
    }

}
