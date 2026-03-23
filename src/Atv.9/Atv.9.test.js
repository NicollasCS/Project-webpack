const calcularGorjeta = require('./Atv.9.js');

describe("Teste de cálculo de gorjeta", () => {

  test("Deve calcular corretamente gorjeta de 10% sobre 100", () => {
    const resultado = calcularGorjeta(100, 10);
    expect(resultado.valorGorjeta).toBe(10);
    expect(resultado.total).toBe(110);
  });

  test("Divisão entre 2 pessoas", () => {
    const resultado = calcularGorjeta(100, 10, 2);
    expect(resultado.valorPorPessoa).toBe(55);
  });

  test("Sem divisão (1 pessoa)", () => {
    const resultado = calcularGorjeta(200, 10);
    expect(resultado.valorPorPessoa).toBe(220);
  });

  test("Gorjeta 0%", () => {
    const resultado = calcularGorjeta(100, 0);
    expect(resultado.total).toBe(100);
  });

  test("Deve lançar erro para valores inválidos", () => {
    expect(() => calcularGorjeta(-100, 10)).toThrow();
    expect(() => calcularGorjeta(100, -10)).toThrow();
    expect(() => calcularGorjeta(100, 10, 0)).toThrow();
  });

});