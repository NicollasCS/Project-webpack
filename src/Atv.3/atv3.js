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

function processarCalculo() {
    const distancia = parseFloat(document.getElementById('distancia').value);
    const consumo = parseFloat(document.getElementById('consumo').value);
    const preco = parseFloat(document.getElementById('preco').value);

    try {
        const resultado = calcularCustoViagem(distancia, consumo, preco);
        
        document.getElementById('resLitros').textContent = resultado.litrosNecessarios.toFixed(2);
        document.getElementById('resCusto').textContent = 'R$ ' + resultado.custoTotal.toFixed(2);
        document.getElementById('resIdaVolta').textContent = 'R$ ' + resultado.custoIdaVolta.toFixed(2);
        
        document.getElementById('resultado').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}

if (typeof module !== 'undefined') {
    module.exports = calcularCustoViagem;
}