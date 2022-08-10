const items = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const botaoesvaziar = document.querySelector('.empty-cart');

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
const getSkuFromProductItem = (item) =>
  item.querySelector('span.item__sku').innerText;
  
  const cartItemClickListener = (event) => {
    cartItems.removeChild(event.target);
    };

    const createCartItemElement = ({ sku, name, salePrice }) => {
      const li = document.createElement('li');
      li.className = 'cart__item';
      li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
      li.addEventListener('click', cartItemClickListener);
      return li;
    };

const questao4 = async (event) => {
const sku = getSkuFromProductItem(event.target.parentElement);
const resultado = await fetchItem(sku);
const objeto = {
  sku,
  name: resultado.title,
  salePrice: resultado.price,
};
const item = createCartItemElement(objeto);
cartItems.appendChild(item);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const botao = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
botao.addEventListener('click', questao4);
section.appendChild(botao);
  return section;
};

const questao2 = async () => {
  const resultadoFunc = await fetchProducts('computador');
  resultadoFunc.results.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
    const produto = {
      sku,
      name,
      image,
    };
    const secaoProduto = createProductItemElement(produto);
    items.appendChild(secaoProduto);
  });
};
function limpaTudo() {
  cartItems.innerText = ' ';
}

botaoesvaziar.addEventListener('click', limpaTudo);

window.onload = () => {
  questao2();
};
