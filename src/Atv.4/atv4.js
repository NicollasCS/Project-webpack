function calcularLucro(custo, venda) {
    if (custo < 0 || venda < 0) {
        throw new Error("Os valores não podem ser negativos.");
    }
    if (isNaN(custo) || isNaN(venda)) {
        throw new Error("Preencha os valores corretamente.");
    }

    const lucro = venda - custo;
    
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

function processarCalculo() {
    const custo = parseFloat(document.getElementById('custo').value);
    const venda = parseFloat(document.getElementById('venda').value);

    try {
        const resultado = calcularLucro(custo, venda);
        
        document.getElementById('resCusto').textContent = 'R$ ' + resultado.custo.toFixed(2);
        document.getElementById('resVenda').textContent = 'R$ ' + resultado.venda.toFixed(2);
        document.getElementById('resLucro').textContent = 'R$ ' + resultado.lucro.toFixed(2);
        document.getElementById('resMargem').textContent = resultado.margemLucro.toFixed(2);
        
        document.getElementById('resultado').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}

if (typeof module !== 'undefined') {
    module.exports = calcularLucro;
}   
