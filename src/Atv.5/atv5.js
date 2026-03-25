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

function processarCalculo() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const valorAtual = parseFloat(document.getElementById('valorAtual').value);
    const meses = document.getElementById('meses').value ? parseFloat(document.getElementById('meses').value) : null;

    try {
        const resultado = calcularRentabilidade(valorInicial, valorAtual, meses);
        
        document.getElementById('resLucro').textContent = 'R$ ' + resultado.lucro.toFixed(2);
        document.getElementById('resRentabilidade').textContent = resultado.rentabilidade.toFixed(2);
        
        if (resultado.rentabilidadeAnual !== null) {
            document.getElementById('resAnual').textContent = resultado.rentabilidadeAnual.toFixed(2);
            document.getElementById('areaAnual').style.display = 'block';
        } else {
            document.getElementById('areaAnual').style.display = 'none';
        }
        
        document.getElementById('resultado').style.display = 'block';
    } catch (error) {
        alert(error.message);
    }
}

if (typeof module !== 'undefined') {
    module.exports = calcularRentabilidade;
}
