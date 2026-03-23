const calcularCambio = require('./Atv.10.js');

describe("Teste de investimento em moeda estrangeira", () => {

  test("Deve calcular corretamente o valor em reais", () => {
    const resultado = calcularCambio(1000, 5);
    expect(resultado.valorEmReais).toBe(5000);
  });

  test("Deve calcular lucro com valorização cambial", () => {
    const resultado = calcularCambio(1000, 5, 4);
    expect(resultado.lucro).toBe(1000);
    expect(resultado.rentabilidade).toBeCloseTo(25);
  });

  test("Deve calcular prejuízo com desvalorização", () => {
    const resultado = calcularCambio(1000, 4, 5);
    expect(resultado.lucro).toBe(-1000);
    expect(resultado.rentabilidade).toBeCloseTo(-20);
  });

  test("Sem taxa de compra, lucro deve ser null", () => {
    const resultado = calcularCambio(1000, 5);
    expect(resultado.lucro).toBeNull();
  });

  test("Deve lançar erro para valores inválidos", () => {
    expect(() => calcularCambio(-1000, 5)).toThrow();
    expect(() => calcularCambio(1000, 0)).toThrow();
  });

});