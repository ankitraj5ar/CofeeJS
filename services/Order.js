import { getProductById } from "./Manager.js";
export async function addToCart(id) {
  const product = await getProductById(id);
  const result = app.Store.cart.filter(
    (prodInCart) => prodInCart.product.id == id
  );
  if (result.length == 1) {
    app.Store.cart = app.Store.cart.map((p) =>
      p.product.id == id ? { ...p, quantity: p.quantity + 1 } : p
    );
  } else {
    app.Store.cart = [...app.Store.cart, { product, quantity: 1 }];
  }
}
