require("../mocks/fetchSimulator");
const { fetchProducts } = require("../helpers/fetchProducts");
const computadorSearch = require("../mocks/search");

describe("1 - Teste a função fetchProducts", () => {
  it("1.1 Verifique se fetchProducts é uma função", () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe("function");
  });

  it("1.2 Verifique se a função fetch foi chamada.", async () => {
    expect.assertions(1);
    await fetchProducts("computador");
    expect(fetch).toBeCalled();
  });

  it("1.3 Verifique se a função fetch foi chamada com o endpoint correto", async () => {
    expect.assertions(1);
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    await fetchProducts("computador");
    expect(fetch).toBeCalledWith(url);
  });
  it("1.4 Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch", async () => {
    expect.assertions(1);
    expect(await fetchProducts("computador")).toEqual(computadorSearch);
  });
  it("1.5 Verifique se retorna um erro se passar a função sem argumento", async() => {
    try {
     await fetchProducts();
    } catch (error) {
      expect(error).toThrow(new Error('You must provide an url'));}

  });
});
