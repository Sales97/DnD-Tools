function calcular(){
    var x = window.document.getElementById("valor-de-atributo")
    var hab = Number(x.value)
    var res = window.document.getElementById("resultado-menor")

    if(hab > 20){
        res.innerText = "Valor de Habilidade inválido!"
    }

    if(hab <= 20){
        res.innerText = "+5"
    }

    if(hab <= 19){
        res.innerText = "+4"
    }

    if(hab <= 17){
        res.innerText = "+3"
    }

    if(hab <= 15){
        res.innerText = "+2"
    }

    if(hab <= 13){
        res.innerText = "+1"
    }

    if(hab <= 11){
        res.innerText = "0"
    }

    if(hab <= 9){
        res.innerText = "-1"
    }

    if(hab <= 7){
        res.innerText = "-2"
    }

    if(hab <= 5){
        res.innerText = "-3"
    }

    if(hab <= 3){
        res.innerText = "-4"
    }

    if(hab == 1){
        res.innerText = "-5"
    }
    
    if(hab < 1){
        res.innerText = "Valor de Habilidade inválido!"
    }
    }
