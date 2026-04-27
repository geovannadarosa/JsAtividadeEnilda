function menor(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);

    document.getElementById('resposta').innerText = Math.max(num1, num2, num3);
    document.getElementById('resposta2').innerText = Math.min(num1, num2, num3);
}