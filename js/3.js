function parimpar(){
    let vamover = Number(document.getElementById('vamover').value)

    if(vamover % 2 == 0){
        document.getElementById('see').innerText = "par";
    }
    else{
        document.getElementById('see').innerText = "impar";
    }
}