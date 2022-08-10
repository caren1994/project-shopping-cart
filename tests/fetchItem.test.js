require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it("1.1 Verifique se fetchItem é uma função", () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe("function");
  });

  it("1.2 Verifique se a função fetch foi chamada.", async () => {
    expect.assertions(1);
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalled();
  });

  it("1.3 Verifique se a função fetch foi chamada com o endpoint correto", async () => {
    expect.assertions(1);
    const url = `https://api.mercadolibre.com/items/MLB1615760527`;
    await fetchItem("MLB1615760527");
    expect(fetch).toBeCalledWith(url);
  });
  it("1.4 Teste se o retorno da função fetchItem com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto Item", async () => {
    expect.assertions(1);
    expect(await fetchItem("MLB1615760527")).toEqual(item);
  });
  it("1.5 Verifique se retorna um erro se passar a função sem argumento", async() => {
    try {
     await fetchItem();
    } catch (error) {
      expect(error).toThrow(new Error('You must provide an url'));}

  });

});
