/* <script src="app.js" type="module"></script>
Open app.js and add:


const $ = function(args){ return document.querySelector(args);}
const $$ = function(args){ return document.querySelectorAll(args);}

HTMLElement.prototype.on = function(a, b, c){ return this.addEventListener(a, b, c); }
HTMLElement.prototype.off = function(a, b){ return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }
Play with the console using $, $$ and direct DOM APIs. */
import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Manager.js";
import Router from "./services/Router.js";
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import { CartItem } from "./components/CartItemPage.js";
import ProductItem from "./components/ProductItem.js";

window.app = {};
app.Store = Store;
app.router = Router;
window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
window.addEventListener("appcartchanged", () => {
  const badge = document.getElementById("badge");
  const qty = app.Store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
