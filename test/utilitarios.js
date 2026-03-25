const Utilitarios = require('./utilitarios');

describe('Classe Utilitarios', () => {
  let util;

  beforeEach(() => {
    util = new Utilitarios();
  });

  // Strings
  test('inverterString', () => {
    expect(util.inverterString('abc')).toBe('cba');
  });

  test('contarCaracteres', () => {
    expect(util.contarCaracteres('hello')).toBe(5);
  });

  test('paraMaiusculas', () => {
    expect(util.paraMaiusculas('abc')).toBe('ABC');
  });

  test('paraMinusculas', () => {
    expect(util.paraMinusculas('ABC')).toBe('abc');
  });

  test('primeiraLetraMaiuscula', () => {
    expect(util.primeiraLetraMaiuscula('teste')).toBe('Teste');
  });

  test('removerEspacos', () => {
    expect(util.removerEspacos('  oi  ')).toBe('oi');
  });

  test('repetirTexto', () => {
    expect(util.repetirTexto('a', 3)).toBe('aaa');
  });

  test('contarPalavras', () => {
    expect(util.contarPalavras('um dois tres')).toBe(3);
  });

  test('ehPalindromo', () => {
    expect(util.ehPalindromo('Ame a ema')).toBe(true);
  });

  // Matemática
  test('somar', () => {
    expect(util.somar(2, 3)).toBe(5);
  });

  test('subtrair', () => {
    expect(util.subtrair(5, 3)).toBe(2);
  });

  test('multiplicar', () => {
    expect(util.multiplicar(2, 3)).toBe(6);
  });

  test('dividir', () => {
    expect(util.dividir(6, 2)).toBe(3);
  });

  test('dividir por zero deve lançar erro', () => {
    expect(() => util.dividir(5, 0)).toThrow('Divisão por zero');
  });

  test('ehPar', () => {
    expect(util.ehPar(4)).toBe(true);
    expect(util.ehPar(5)).toBe(false);
  });

  test('ehNumero', () => {
    expect(util.ehNumero(10)).toBe(true);
    expect(util.ehNumero('10')).toBe(false);
  });

  // Arrays
  test('primeiroElemento', () => {
    expect(util.primeiroElemento([1, 2, 3])).toBe(1);
  });

  test('ultimoElemento', () => {
    expect(util.ultimoElemento([1, 2, 3])).toBe(3);
  });

  test('tamanhoArray', () => {
    expect(util.tamanhoArray([1, 2, 3])).toBe(3);
  });

  test('ordenarArray', () => {
    expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
  });

  test('inverterArray', () => {
    expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('mediaArray', () => {
    expect(util.mediaArray([2, 4, 6])).toBe(4);
  });

  test('removerDuplicados', () => {
    expect(util.removerDuplicados([1, 1, 2, 2])).toEqual([1, 2]);
  });

  test('juntarArray', () => {
    expect(util.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });

  // Outros
  test('gerarNumeroAleatorio', () => {
    const num = util.gerarNumeroAleatorio(10);
    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThan(10);
  });

  test('mesclarObjetos', () => {
    expect(util.mesclarObjetos({ a: 1 }, { b: 2 }))
      .toEqual({ a: 1, b: 2 });
  });
});