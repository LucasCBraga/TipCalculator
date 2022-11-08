document.getElementById("valor-calculado").style.display = "none"
document.getElementById('each').style.display = 'none'
onclick

function calculateDinner(){
    var totalConta = document.getElementById('total-conta').value
    var taxaServico = document.getElementById('taxa-de-servico').value
    var numeroPessoas = document.getElementById('numero-pessoas').value

    if(isNaN(totalConta) || isNaN(numeroPessoas)){
        alert('Please, enter a valid value')
        return
    }

    if(numeroPessoas === "" || numeroPessoas <=1){
        numeroPessoas = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }

    var totalTaxaServico = (totalConta * taxaServico) / numeroPessoas
    var total = totalTaxaServico + (totalConta / numeroPessoas)
    
    total = Math.round(total * 100) / 100
    total = total.toFixed(2)

    document.getElementById("valor-calculado").style.display = "block"
    document.getElementById('valor-por-pessoa').innerHTML = total
}

document.getElementById('calculator').onclick = function(){
    calculateDinner()
}