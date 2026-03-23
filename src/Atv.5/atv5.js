function calcularRentabilidade(valorInicial, valorAtual, meses = null) {
    if (valorInicial <= 0) {
        throw new Error("O valor inicial deve ser maior que zero.");
    }
    if (valorAtual < 0) {
        throw new Error("O valor atual não pode ser negativo.");
    }

    const lucro = valorAtual - valorInicial;
    const rentabilidade = (lucro / valorInicial) * 100;
    
    let rentabilidadeAnual = null;
    
    if (meses !== null && meses > 0) {
        rentabilidadeAnual = (rentabilidade / meses) * 12;
    }

    return {
        valorInicial,
        valorAtual,
        lucro,
        rentabilidade,
        rentabilidadeAnual
    };
}

if (typeof module !== 'undefined') {
    module.exports = calcularRentabilidade;
}
