function calcularDesconto(precoOriginal, percentualDesconto) {
    if (isNaN(precoOriginal) || isNaN(percentualDesconto)) {
        throw new Error("Por favor, preencha todos os campos.");
    }
    if (precoOriginal < 0 || percentualDesconto < 0) {
        throw new Error("Valores não podem ser negativos.");
    }

    const valorDesconto = (precoOriginal * percentualDesconto) / 100;
    const precoFinal = precoOriginal - valorDesconto;
    const economia = valorDesconto;

    return {
        precoOriginal,
        percentualDesconto,
        valorDesconto,
        precoFinal,
        economia
    };
}

function processarCalculo() {
    const preco = parseFloat(document.getElementById('preco').value);
    const porcentagem = parseFloat(document.getElementById('porcentagem').value);

    try {
        const resultado = calcularDesconto(preco, porcentagem);
        
        document.getElementById('resOriginal').textContent = 'R$ ' + resultado.precoOriginal.toFixed(2);
        document.getElementById('resPorcentagem').textContent = resultado.percentualDesconto;
        document.getElementById('resValorDesconto').textContent = 'R$ ' + resultado.valorDesconto.toFixed(2);
        document.getElementById('resFinal').textContent = 'R$ ' + resultado.precoFinal.toFixed(2);
        document.getElementById('resEconomia').textContent = 'R$ ' + resultado.economia.toFixed(2);
        
        document.getElementById('resultado').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}

if (typeof module !== 'undefined') {
    module.exports = calcularDesconto;
}