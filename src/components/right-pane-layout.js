import React from 'react'
import ProductCatalog from './product-catalog'
import ReviewCart from './review-cart'

export default class RightPaneLayout extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="right-pane">
        <ProductCatalog {...this.props}/>
        <ReviewCart {...this.props}/>
      </div>
    )
  }

}
