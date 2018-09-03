import React from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/actions'

class ReviewCart extends React.Component{
  render(){
    const $products = this.renderProducts()
          ,productsExist = !!$products.length;

    return (
      <div className={`review-cart${this.props.showReviewCart ? ' animate-slide-in':''}`}>
        <div className="align-top-layout">
              <div className="header">
                <h1 className="title">Review Cart</h1>
                <div className="tag">Review the items added to the list, alter their quantities and when done, print it when you go shopping for your reference</div>
                <img src="/images/close.png" className="btn-close" onClick={()=>this.props.toggleReviewCart()} />
              </div>

              {
                  !productsExist &&
                                        <div className="empty-msg">No products added</div>
              }
              {
                  !!productsExist &&
                                          <div className="table-header">
                                            <span>Product Name</span><span>Qty</span>
                                          </div>
              }
              {
                  !!productsExist &&
                                          <div className="content">
                                              <table cellSpacing="0">
                                                  <tbody>
                                                    {$products}
                                                  </tbody>
                                              </table>
                                          </div>
              }
        </div>
              {
                  !!productsExist &&
                                      <div className="footer">
                                          <div className="btn btn-secondary" onClick={this.printList}>Print List</div>
                                      </div>
              }
      </div>
    )
  }

  renderProducts(){
    return this.props.productsInCart.map(product=>{
      return (
        <tr key={product.id}>
          <td>
            <img className="remove"
                onClick={()=>this.props.removeFromCart(product.id)}
                src="/images/remove-product.png"/>

            {product.title} ({product.units.qty + ' ' + product.units.display})
          </td>
          <td>
            <img className="inc-qty"  src="/images/inc-qty.png" onClick={()=>this.props.incrementQty(product.id)} />
              <div className="qty">{product.units.qty}</div>
            <img className="dec-qty"  src="/images/dec-qty.png" onClick={()=>this.props.decrementQty(product.id)} />
          </td>
        </tr>
      )
    })
  }

  printList = () =>{
    if(!!window.localStorage){
        window.localStorage.setItem('products',JSON.stringify(this.props.productsInCart));
        window.open('/print',"Mummoo's Grocery","width=470,height=800,scrollbar=yes,resize=no");
    }else{
      alert("Cannot print as this browser doesn't support local storage")
    }
  }
}



function mapStateToProps(state){
  return {
    productsInCart : state.catalog.filter(product => product.added)
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return {
    incrementQty : (id)=>(dispatch(actions.incrementQty(id))),
    decrementQty : (id)=>(dispatch(actions.decrementQty(id))),
    removeFromCart : (id)=>(dispatch(actions.removeFromCart(id)))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReviewCart)
