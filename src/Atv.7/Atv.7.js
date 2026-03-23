function calcularBitcoin(btc, preco, investido) {
    if (btc < 0 || preco < 0) {
        throw new Error("Valores inválidos");
    }

    const valorTotal = btc * preco;

    let lucro = null;
    let rentabilidade = null;

    if (investido !== undefined) {
        lucro = valorTotal - investido;
        rentabilidade = (lucro / investido) * 100;
    }

    return {
        valorTotal,
        lucro,
        rentabilidade
    };
}

function calcular() {
    const btc = Number(document.getElementById("btc").value);
    const preco = Number(document.getElementById("preco").value);
    const investido = Number(document.getElementById("investido").value);

    try {
        const r = calcularBitcoin(btc, preco, investido || undefined);

        let html = `
            <p><b>BTC:</b> ${btc}</p>
            <p><b>Preço:</b> R$ ${preco.toFixed(2)}</p>
            <p><b>Total:</b> R$ ${r.valorTotal.toFixed(2)}</p>
        `;

        if (r.lucro !== null) {
            html += `
                <p><b>Lucro:</b> R$ ${r.lucro.toFixed(2)}</p>
                <p><b>Rentabilidade:</b> ${r.rentabilidade.toFixed(2)}%</p>
            `;
        }

        document.getElementById("resultado").innerHTML = html;

    } catch (e) {
        alert(e.message);
    }
}

if (typeof module !== "undefined") {
    module.exports = calcularBitcoin;
}