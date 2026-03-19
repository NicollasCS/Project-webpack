const funcao = require('./index');

describe('Testes do index', () => {
    text("testando greetings", () => {
        const resultado = funcao();
        expect(resultado).toBe('Hello World');
    })
});