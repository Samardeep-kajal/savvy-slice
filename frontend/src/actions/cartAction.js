export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    image: pizza.image,
    variant,
    quantity,
    prices: pizza.prices,
    price: pizza.prices[0][variant] * quantity,
  };
  dispatch({ type: "ADD_TO_CART", payload: cartItem });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
