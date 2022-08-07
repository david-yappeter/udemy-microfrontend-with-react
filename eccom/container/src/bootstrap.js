import { mount as productMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

const productEl = document.querySelector('#product-container');
if(productEl) {
  productMount(productEl);
}

const cartEl = document.querySelector('#cart-container');
if(cartEl) {
  cartMount(cartEl);
}
