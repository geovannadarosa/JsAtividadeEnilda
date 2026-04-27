function ler(){
    let conta = Number(document.getElementById('conta').value);
    let deposito = Number(document.getElementById('deposito').value);
    let credito = Number(document.getElementById('credito').value);
    let saldo = Number(document.getElementById('saldo').value);

    if(conta = saldo - deposito + credito <= 0){
        document.getElementById('resposta').innerText = "Saldo positivo " + (conta = saldo + deposito - credito);
    }
    else{
        document.getElementById('resposta').innerText = "Saldo negativo " + (conta = saldo + deposito - credito);
    }

}