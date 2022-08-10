const saveCartItems = (objeto) => {
  localStorage.setItem('cartItems', objeto);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
