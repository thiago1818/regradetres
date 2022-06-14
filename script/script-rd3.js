
function rd3Simples() {
    let n1s = document.getElementById('n1s')
    let n2s = document.getElementById('n2s')
    let n3s = document.getElementById('n3s')
    let resultados = document.querySelector('.resultado1')
    if (n1s.value.length == 0 || n2s.value.length == 0 || n3s.value.length == 0) {
        resultados.innerHTML = 'X'
    } else {
        let num1s = parseFloat(n1s.value)
        let num2s = parseFloat(n2s.value)
        let num3s = parseFloat(n3s.value)
        var total = 0
        total = (num3s * num2s) / num1s
    }
    resultados.innerHTML = total.toFixed(1)
}

function rd3Composta() {
    let n1c = document.getElementById('n1c')
    let n2c = document.getElementById('n2c')
    let n3c = document.getElementById('n3c')
    let resultadoc = document.querySelector('.resultado2')
    if (n1c.value.length == 0 || n2c.value.length == 0 || n3c.value.length == 0) {
        resultadoc.innerHTML = 'X'
    } else {
        var total = 0
        let num1c = parseFloat(n1c.value)
        let num2c = parseFloat(n2c.value)
        let num3c = parseFloat(n3c.value)
        total = (num1c * num2c) / num3c
    }
    resultadoc.innerHTML = total.toFixed(1)
}


function limpar() {
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
    document.getElementById('n3').value = ''
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = 'X'
}