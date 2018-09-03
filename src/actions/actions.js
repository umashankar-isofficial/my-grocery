export function addToCart(id){
  return {
    type: 'ADD_TO_CART',
    id
  }
}

export function removeFromCart(id){
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

export function incrementQty(id){
  return {
    type: 'INCREMENT_QTY',
    id
  }
}

export function decrementQty(id){
  return {
    type: 'DECREMENT_QTY',
    id
  }
}

export function searchProducts(term){
  return {
    type: 'SEARCH_PRODUCTS',
    term
  }
}
