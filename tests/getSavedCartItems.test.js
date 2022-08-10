const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('4.1 Verifica se ao chamar getSavedCartItems o método localStorage.setItem é chamado',  () => {
    expect.assertions(1);
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  
});
it('4.1 Verifica se ao chamar getSavedCartItems o método localStorage.setItem é chamadocom o parametro cartitems', () => {
  expect.assertions(1);
  getSavedCartItems();
  expect(localStorage.getItem).toBeCalledWith('cartItems');

});
});
