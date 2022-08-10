const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('3.1 Verifica se ao chamar saveCartItems com o argumento <ol><li>Item</li></ol> o método localStorage.setItem é chamado', async () => {
    expect.assertions(1);
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  
});
it('3.1 Verifica se ao chamar saveCartItems com o argumento <ol><li>Item</li></ol> o método localStorage.setItem é chamado com dois parametros', async () => {
  expect.assertions(1);
  await saveCartItems('<ol><li>Item</li></ol>');
  expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');

});


});
