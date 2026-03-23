const calcularBitcoin = require('./Atv.7.js');

describe("Teste de investimento em Bitcoin", () => {

  test("Deve calcular corretamente o valor total", () => {
    const resultado = calcularBitcoin(0.5, 300000);
    expect(resultado.valorTotal).toBe(150000);
  });

  test("Deve calcular lucro e rentabilidade", () => {
    const resultado = calcularBitcoin(1, 200000, 150000);
    expect(resultado.lucro).toBe(50000);
    expect(resultado.rentabilidade).toBeCloseTo(33.33);
  });

  test("Sem valor investido, lucro deve ser null", () => {
    const resultado = calcularBitcoin(1, 200000);
    expect(resultado.lucro).toBeNull();
    expect(resultado.rentabilidade).toBeNull();
  });

  test("Prejuízo no investimento", () => {
    const resultado = calcularBitcoin(1, 100000, 150000);
    expect(resultado.lucro).toBe(-50000);
    expect(resultado.rentabilidade).toBeCloseTo(-33.33);
  });

  test("Deve lançar erro para valores inválidos", () => {
    expect(() => calcularBitcoin(-1, 200000)).toThrow();
    expect(() => calcularBitcoin(1, -200000)).toThrow();
  });

});