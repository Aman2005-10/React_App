export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product,
  });
  
  export const removeFromCart = (product) => ({
    type: "REMOVE_FROM_CART",
    payload: product,
  });
  
  export const setSelectedItems = (itemId) => ({
    type: 'SET_SELECTED_ITEMS',
    payload: itemId,
  });
  
  export const setTotalCost = (totalCost) => ({
    type: 'SET_TOTAL_COST',
    payload: totalCost,
  });