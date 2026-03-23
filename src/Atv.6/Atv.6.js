function calcularMRU(s0, v, t) {
    if (t < 0) {
        throw new Error("Tempo não pode ser negativo");
    }

    const posicaoFinal = s0 + v * t;
    const distanciaPercorrida = Math.abs(v * t);

    return {
        posicaoFinal,
        distanciaPercorrida
    };
}

function calcular() {
    const s0 = Number(document.getElementById("s0").value);
    const v = Number(document.getElementById("v").value);
    const t = Number(document.getElementById("t").value);

    try {
        const resultado = calcularMRU(s0, v, t);

        document.getElementById("resultado").innerHTML = `
            <p><b>Posição final:</b> ${resultado.posicaoFinal} m</p>
            <p><b>Distância percorrida:</b> ${resultado.distanciaPercorrida} m</p>
        `;
    } catch (erro) {
        alert(erro.message);
    }
}

if (typeof module !== "undefined") {
    module.exports = calcularMRU;
}