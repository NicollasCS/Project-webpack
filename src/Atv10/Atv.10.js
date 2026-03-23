function calcularCambio(valorEstrangeiro, taxaAtual, taxaCompra) {
    if (valorEstrangeiro < 0 || taxaAtual <= 0) {
        throw new Error("Valores inválidos");
    }

    const valorEmReais = valorEstrangeiro * taxaAtual;

    let lucro = null;
    let rentabilidade = null;

    if (taxaCompra !== undefined) {
        const valorInicial = valorEstrangeiro * taxaCompra;
        lucro = valorEmReais - valorInicial;
        rentabilidade = (lucro / valorInicial) * 100;
    }

    return {
        valorEmReais,
        lucro,
        rentabilidade
    };
}


function calcular() {
    const valor = Number(document.getElementById("valor").value);
    const taxaAtual = Number(document.getElementById("taxaAtual").value);
    const taxaCompra = Number(document.getElementById("taxaCompra").value);

    try {
        const r = calcularCambio(valor, taxaAtual, taxaCompra || undefined);

        let html = `
            <p><b>Valor investido:</b> ${valor}</p>
            <p><b>Taxa atual:</b> R$ ${taxaAtual.toFixed(2)}</p>
            <p><b>Valor em reais:</b> R$ ${r.valorEmReais.toFixed(2)}</p>
        `;

        if (r.lucro !== null) {
            html += `
                <p><b>Lucro/Prejuízo:</b> R$ ${r.lucro.toFixed(2)}</p>
                <p><b>Rentabilidade:</b> ${r.rentabilidade.toFixed(2)}%</p>
            `;
        }

        document.getElementById("resultado").innerHTML = html;

    } catch (e) {
        alert(e.message);
    }
}


if (typeof module !== "undefined") {
    module.exports = calcularCambio;
}