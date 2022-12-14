const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    //fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toBe('function');// Teste se productDetails é uma função.
  });

  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);// Teste se o retorno da função é um array.
  });

  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2) 
  });

  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara')[0])).toBeFalsy();
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara')[1])).toBeFalsy();
  });

  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Mascara')).not.toBe(productDetails('Alcool gel', 'Mascara'))
  });
  
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool gel', 'Mascara')[0].details.productId).toMatch('123');
    expect(productDetails('Alcool gel', 'Mascara')[1].details.productId).toMatch('123');
  });
});
