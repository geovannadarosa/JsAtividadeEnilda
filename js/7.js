function reajuste(){
    console.log("a")
    let salario = Number(document.getElementById('salario').value);
    if(salario <= 280){
        document.getElementById('antes-reajuste').innerText = `salario atual ${salario}`
        document.getElementById('porcentual-aumento').innerText = '20% de aumento'
        document.getElementById('aumento').innerText = `valor de aumento ${(salario * 1.2) - salario}`
        document.getElementById('novo-salario').innerText = `salario novo ${salario * 1.2}`


    }
    else if(salario <= 700){
        document.getElementById('antes-reajuste').innerText = `salario atual ${salario}`
        document.getElementById('porcentual-aumento').innerText = '20% de aumento'
        document.getElementById('aumento').innerText = `valor de aumento ${(salario * 1.15) - salario}`
        document.getElementById('novo-salario').innerText = `salario novo ${salario * 1.15}`
    }
    else if(salario <= 1500){
        document.getElementById('antes-reajuste').innerText = `salario atual ${salario}`
        document.getElementById('porcentual-aumento').innerText = '20% de aumento'
        document.getElementById('aumento').innerText = `valor de aumento ${(salario * 1.1) - salario}`
        document.getElementById('novo-salario').innerText = `salario novo ${salario * 1.1}`
    }
    else{
        document.getElementById('antes-reajuste').innerText = `salario atual ${salario}`
        document.getElementById('porcentual-aumento').innerText = '20% de aumento'
        document.getElementById('aumento').innerText = `valor de aumento ${(salario * 1.05) - salario}`
        document.getElementById('novo-salario').innerText = `salario novo ${salario * 1.05}`
    }
}