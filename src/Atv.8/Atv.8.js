function converterTemperatura(valor, tipo) {
    if (isNaN(valor)) {
        throw new Error("Valor inválido");
    }

    let resultado;

    if (tipo === "CtoK") {
        resultado = valor + 273.15;
    } else if (tipo === "KtoC") {
        resultado = valor - 273.15;
    } else {
        throw new Error("Tipo inválido");
    }

    return { resultado };
}


function converter() {
    const valor = Number(document.getElementById("temp").value);
    const tipo = document.getElementById("tipo").value;

    try {
        const r = converterTemperatura(valor, tipo);

        document.getElementById("resultado").innerHTML = `
            <p><b>Resultado:</b> ${r.resultado.toFixed(2)}</p>
        `;
    } catch (e) {
        alert(e.message);
    }
}

if (typeof module !== "undefined") {
    module.exports = converterTemperatura;
}