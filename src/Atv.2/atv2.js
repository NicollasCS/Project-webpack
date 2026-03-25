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

function processarCalculo() {
    const salarioBase = parseFloat(document.getElementById('salarioBase').value);
    const porcentagemBonus = parseFloat(document.getElementById('porcentagemBonus').value);

    try {
        const resultado = calcularSalarioComBonus(salarioBase, porcentagemBonus);
        
        document.getElementById('resBase').textContent = 'R$ ' + resultado.salarioBase.toFixed(2);
        document.getElementById('resPorcentagem').textContent = resultado.percentualBonus;
        document.getElementById('resValorBonus').textContent = 'R$ ' + resultado.valorBonus.toFixed(2);
        document.getElementById('resFinal').textContent = 'R$ ' + resultado.salarioFinal.toFixed(2);
        
        document.getElementById('resultado').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}

if (typeof module !== 'undefined') {
    module.exports = calcularSalarioComBonus;
}