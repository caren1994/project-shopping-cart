require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
 it('1.1 Verifique se fetchProducts é uma função',()=>{
  expect.assertions(1);
  expect(typeof fetchProducts).toBe('function');
 });

 it('1.2 Verifique se a função fetch foi chamada.', async () => {
  expect.assertions(1);
  await fetchProducts('computador');
  expect(fetch).toBeCalled();
});

it('1.3 Verifique se a função fetch foi chamada com o endpoint correto', async () => {
  expect.assertions(1);
  const query = 'computador';
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=query';
  await fetchProducts('computador');
  expect(fetch).toBeCalledWith(url);
});
it('1.4 Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch'
, async () => {
  expect.assertions(1);
  const resposta=await fetchProducts('computador');
  expect(resposta).toEqual(computadorSearch);
});
it('1.2 Verifique se retorna um erro se passar a função sem argumento', async () => {
  expect.assertions(1);
  const failRequest=await fetchProducts();
  expect(failRequest).toEqual(new Error('You must provide an url'));
});

  
});
