function calcularSalarioComBonus(salarioBase, percentualBonus) {
    if (isNaN(salarioBase) || isNaN(percentualBonus)) {
        throw new Error("Por favor, preencha todos os campos.");
    }
    if (salarioBase < 0 || percentualBonus < 0) {
        throw new Error("Valores não podem ser negativos.");
    }

    const valorBonus = (salarioBase * percentualBonus) / 100;
    const salarioFinal = salarioBase + valorBonus;

    return {
        salarioBase,
        percentualBonus,
        valorBonus,
        salarioFinal
    };
}

if (typeof module !== 'undefined') {
    module.exports = calcularSalarioComBonus;
}