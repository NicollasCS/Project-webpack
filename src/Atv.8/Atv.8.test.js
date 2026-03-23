const converterTemperatura = require('./Atv.8.js');

describe("Teste de conversão de temperatura", () => {

  test("Deve converter Celsius para Kelvin corretamente", () => {
    const resultado = converterTemperatura(0, "CtoK");
    expect(resultado.resultado).toBeCloseTo(273.15);
  });

  test("Deve converter Kelvin para Celsius corretamente", () => {
    const resultado = converterTemperatura(273.15, "KtoC");
    expect(resultado.resultado).toBeCloseTo(0);
  });

  test("Temperatura negativa em Celsius", () => {
    const resultado = converterTemperatura(-10, "CtoK");
    expect(resultado.resultado).toBeCloseTo(263.15);
  });

  test("Deve lançar erro para tipo inválido", () => {
    expect(() => converterTemperatura(100, "X")).toThrow();
  });

  test("Deve lançar erro para valor inválido", () => {
    expect(() => converterTemperatura("abc", "CtoK")).toThrow();
  });

});