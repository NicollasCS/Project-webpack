function calcularCustoViagem(distancia, consumo, precoCombustivel) {
    if (distancia <= 0 || consumo <= 0 || precoCombustivel <= 0) {
        throw new Error("Valores devem ser maiores que zero.");
    }
    if (isNaN(distancia) || isNaN(consumo) || isNaN(precoCombustivel)) {
        throw new Error("Preencha todos os campos corretamente.");
    }

    const litrosNecessarios = distancia / consumo;
    const custoTotal = litrosNecessarios * precoCombustivel;
    const custoIdaVolta = custoTotal * 2;

    return {
        litrosNecessarios,
        custoTotal,
        custoIdaVolta
    };
}

if (typeof module !== 'undefined') {
    module.exports = calcularCustoViagem;
}