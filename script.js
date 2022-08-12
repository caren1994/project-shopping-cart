// const getSavedCartItems = require("./helpers/getSavedCartItems");
// const saveCartItems = require("./helpers/saveCartItems");

const items = document.querySelector('.items');// elemento pai  dos produtos 
const cartItems = document.querySelector('.cart__items');// elemento pai do carrinho de compras
const botaoesvaziar = document.querySelector('.empty-cart');// salva o botao nessa variavel
localStorageobjeto = [];// crio um array vazio para por o objeto a ser mudado para string
const totalPrice = document.querySelector('.total-price');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const Precos = () => {
  const produtos = cartItems.children;
  const resultado = [];
  for (let i = 0; i < produtos.length; i += 1) {
    const preco = Number(produtos[i].innerText.split('PRICE: $')[1]);
    resultado.push(preco);
  }
  return resultado;
};

const somaCart = () => {
  const precos = Precos();
  const valorTotal = precos.reduce((acc, preco) => acc + preco, 0);
  totalPrice.innerText = valorTotal.toPrecision();
};

const getSkuFromProductItem = (item) =>// recebe o pai do botao clicado que éa seção
  item.querySelector('span.item__sku').innerText;// dentro dessa seção ele procura o span com a classe item--sku e pega o valor escrito que é o id
  
  const cartItemClickListener = (event) => {
    cartItems.removeChild(event.target);// remove o filho de cartitems que foi clicado do carrinho
    localStorageobjeto = localStorageobjeto.filter((element) => element !== event.target);// filtro o array e coloco dentro desse array novo só os elementos diferentes do event.target que foi removido
    somaCart();
  };

    const createCartItemElement = ({ sku, name, salePrice }) => { // recebe o objeto
      const li = document.createElement('li');// cria uma li
      li.className = 'cart__item';// coloca a classe
      li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;// o texto , com os valores passados como parametro
      li.addEventListener('click', cartItemClickListener);// coloca um add event listener em cada li passada para o carrinho
     return li;// retorna a li
    };

const questao4 = async (event) => { // recebe o click do botao certo 
const sku = getSkuFromProductItem(event.target.parentElement);// pega o pai do botão clicado que é a seção 
const resultado = await fetchItem(sku);// pega o id e coloca como parametro do fetchitem e retorna para resultado
const objeto = { // pega o resultado que tem o objeto completo e criamos outro objeto com as chaves pedidas e o valor do resultado
  sku,
  name: resultado.title,
  salePrice: resultado.price,
};
const item = createCartItemElement(objeto);// manda o objeto como argumento para a função que realiza o processo de adc o item no carrinho
cartItems.appendChild(item);// apenda as li do resultado da função na ol
localStorageobjeto.push(objeto);// o resultado do objeto que se tornara uma li é colocada no array
saveCartItems(JSON.stringify(localStorageobjeto));// transformo esse objeto em string e chamo ele como parametroo da função save para ser guardada no localstorage
somaCart();
};

const createProductItemElement = ({ sku, name, image }) => { // recebe o parametro fa funçao2
  const section = document.createElement('section');// cria uma section
  section.className = 'item';// adc uma classe

  section.appendChild(createCustomElement('span', 'item__sku', sku));// adc nessa section um span com a classe e o sku do objeto
  section.appendChild(createCustomElement('span', 'item__title', name));// adc nessa mesma section outro span com a classe e o name
  section.appendChild(createProductImageElement(image));// adc nessa mesma section a imagem 
  const botao = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');// coloquei o botao em uma variavel 
botao.addEventListener('click', questao4);// adc um addeventlistenes no botao do produto que chama a questao4
section.appendChild(botao);// apendei na quela mesma section 
  return section;
};

const questao2 = async () => {
  const resultadoFunc = await fetchProducts('computador');// passa o parametro computador para a funçao
  resultadoFunc.results.forEach((element) => { // pego o array results e faço um for pelos elementos e pego um de cada vez
    const { id: sku, title: name, thumbnail: image } = element;// faço um destructing dos objetos e pego oq é necessario
    const produto = { // faço o objeto novo desejado para ser passado como parametro para a funçao createproduct
      sku,
      name,
      image,
    };
    const secaoProduto = createProductItemElement(produto);// mando como parametro
    items.appendChild(secaoProduto);// e apendo o produto na section pai items
  });
};
function questao8() {
  const locals = JSON.parse(getSavedCartItems() || '[]');// pego as strings e coloco em objeto que estavam dentro do local pego com a função get, e se nao tiver recebo um array vazio
  locals.forEach((element) => { // se tiver ,pego cada elemento
    const objetonovo = createCartItemElement(element);// e passo esse elemento que é um  objeto como parametro para a função que vai construir as li e colocar na lista do carrinho
    cartItems.appendChild(objetonovo);// e apendo na ol
  });
  somaCart();
}

function limpaTudo() {
  cartItems.innerText = ' ';// chama a ol aonde esta guardada as li e limpa com o espaço do innet.text
  somaCart();
}

botaoesvaziar.addEventListener('click', limpaTudo);// chama o botao e adc um event listener de click e a funçãopara limpara lista de compras 

const carregando = async () => { // função11
  const elementP = document.createElement('p');// crio o elemento p
  elementP.innerText = 'carregando...';// coloco o texto pedido
  elementP.classList.add('loading');// adc a classe
  items.appendChild(elementP);// appendo ele na section
  await questao2();// ele vai esperar a funçao terminar e vai remover meu p , se nao o p fica aparecendo
  items.firstChild.remove();
  somaCart();
};

window.onload = async () => {
  await carregando();// coloco a função na tela que vai executar e chamar a função 2
  questao8();// mostro na tela 
};
