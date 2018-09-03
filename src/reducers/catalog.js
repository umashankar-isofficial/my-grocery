import * as _ from 'lodash'

export default function(catalog = [],action){
  switch(action.type){
    case 'ADD_TO_CART':
          return mutateState(catalog,action.id,{added:true})
    break;
    case 'REMOVE_FROM_CART':
          return mutateState(catalog,action.id,{added:false})
    break;
    case 'INCREMENT_QTY':
          return changeQty(catalog,action.id,'INC')
    break;
    break;
    case 'DECREMENT_QTY':
          return changeQty(catalog,action.id,'DEC')
    break;
    case 'SEARCH_PRODUCTS':
          return searchProducts(catalog,action.term)
  }
  return catalog;
}

function mutateState(catalog,id,newProps){
  let newCatalog = [...catalog],
      i=0;
  for(let product of newCatalog){
    if(product.id == id){
      newCatalog[i] = {...product, ...newProps}
    }
    i++;
  }
  return newCatalog;
}

function changeQty(catalog,id,whatTo){
  let newCatalog = [...catalog]
  for(let product of newCatalog){
    if(product.id == id){
      whatTo == 'INC'?
              product.units.qty += product.units.increment :
                                              product.units.qty > 1 ?
                                                    product.units.qty -= product.units.increment : ''

    }
  }
  return newCatalog;
}
