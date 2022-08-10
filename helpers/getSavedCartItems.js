const getSavedCartItems = () => {
  const pegarObjeto = localStorage.getItem('cartItems');// pega a chave salva
  return pegarObjeto;// retorna a chave salva
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
