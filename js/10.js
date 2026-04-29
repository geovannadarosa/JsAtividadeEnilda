function bissexto(){
    let ano = Number(document.getElementById('ano').value);

    if((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)){
        document.getElementById('resposta').innerText = 'esse ano é bissexto'
    }
    else{
        document.getElementById('resposta').innerText = 'esse ano não é bissexto'
    }
}