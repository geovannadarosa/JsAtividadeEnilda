function femea(){
    let foum = (document.getElementById('foum').value);

    if(foum == "f"){
        document.getElementById('resposta').innerText = "é FEMEAAAA AEEEEE";
    }
    else if(foum == "m"){
        document.getElementById('resposta').innerText = "é macho...";
    }
    else{
        document.getElementById('resposta').innerText = "letra invalida, tente novamente...";
    }
}