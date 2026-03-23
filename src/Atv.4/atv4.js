function calcularLucro(custo, venda) {
    if (custo < 0 || venda < 0) {
        throw new Error("Os valores não podem ser negativos.");
    }
    if (isNaN(custo) || isNaN(venda)) {
        throw new Error("Preencha os valores corretamente.");
    }

    const lucro = venda - custo;
    
    // Evita divisão por zero se o custo for 0
    let margemLucro = 0;
    if (custo > 0) {
        margemLucro = (lucro / custo) * 100;
    }

    return {
        custo,
        venda,
        lucro,
        margemLucro
    };
}

if (typeof module !== 'undefined') {
    module.exports = calcularLucro;
}   