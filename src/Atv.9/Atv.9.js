function calcularGorjeta(valorConta, percentual, pessoas = 1) {
    if (valorConta < 0 || percentual < 0 || pessoas <= 0) {
        throw new Error("Valores inválidos");
    }

    const valorGorjeta = valorConta * (percentual / 100);
    const total = valorConta + valorGorjeta;
    const valorPorPessoa = total / pessoas;

    return {
        valorGorjeta,
        total,
        valorPorPessoa
    };
}


function calcular() {
    const valor = Number(document.getElementById("valor").value);
    const percentual = Number(document.getElementById("percentual").value);
    const pessoas = Number(document.getElementById("pessoas").value) || 1;

    try {
        const r = calcularGorjeta(valor, percentual, pessoas);

        document.getElementById("resultado").innerHTML = `
            <p><b>Valor da conta:</b> R$ ${valor.toFixed(2)}</p>
            <p><b>Gorjeta:</b> R$ ${r.valorGorjeta.toFixed(2)}</p>
            <p><b>Total:</b> R$ ${r.total.toFixed(2)}</p>
            <p><b>Por pessoa:</b> R$ ${r.valorPorPessoa.toFixed(2)}</p>
        `;
    } catch (e) {
        alert(e.message);
    }
}


if (typeof module !== "undefined") {
    module.exports = calcularGorjeta;
}