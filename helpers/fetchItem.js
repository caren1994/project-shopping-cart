const fetchItem = async ($ItemID) => {
  const url = await fetch(`https://api.mercadolibre.com/items/${$ItemID}`)
  .then((resposta) => resposta.json())
  .then((data) => data)
  .catch((error) => error);
  return url;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
