const saveCartItems = (objeto) => { // recebe um objeto em string
  localStorage.setItem('cartItems', objeto);// salva com a chave cartitem e o valor é o objeto em string
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
