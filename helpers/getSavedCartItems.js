const getSavedCartItems = () => {
  const pegarObjeto = localStorage.getItem('cartItems');
  return pegarObjeto;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
