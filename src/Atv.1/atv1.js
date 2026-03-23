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

if (typeof module !== 'undefined') {
    module.exports = calcularDesconto;
}