const calcularMRU = require('./Atv.6');

describe("Teste de MRU", () => {

  test("Deve calcular corretamente a posição final", () => {
    const resultado = calcularMRU(0, 10, 5);
    expect(resultado.posicaoFinal).toBe(50);
    expect(resultado.distanciaPercorrida).toBe(50);
  });

  test("Movimento com posição inicial diferente de zero", () => {
    const resultado = calcularMRU(10, 5, 4);
    expect(resultado.posicaoFinal).toBe(30);
  });

  test("Velocidade negativa (movimento retrógrado)", () => {
    const resultado = calcularMRU(50, -10, 2);
    expect(resultado.posicaoFinal).toBe(30);
    expect(resultado.distanciaPercorrida).toBe(20);
  });

  test("Tempo zero", () => {
    const resultado = calcularMRU(100, 10, 0);
    expect(resultado.posicaoFinal).toBe(100);
  });

  test("Deve lançar erro para tempo negativo", () => {
    expect(() => calcularMRU(0, 10, -5)).toThrow();
  });

});