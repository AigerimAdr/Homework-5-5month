export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: { _id: itemId },
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});
