function posneg(){
    let verificar = Number(document.getElementById('verificar').value);
    if (verificar > 0){
        document.getElementById('ver').innerText = "positivo";
    }
    else{
        document.getElementById('ver').innerText = "negativo";
    }
}
