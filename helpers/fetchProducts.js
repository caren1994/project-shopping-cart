const fetchProducts = async ($QUERY) => {
  const list = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`)
  .then((resposta) => resposta.json())
  .then((data) => data)
  .catch((error) => error);
  return list;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
