import React from 'react'
import {connect} from 'react-redux'
class HeaderComponent extends React.Component{
  render(){
    return (
      <header>
          <img src="/images/shopping-bag.png" className="logo"/>
          <h1> Mummoo Grocery </h1>
          <div className="search">
              <form>
                  <input type="text" placeholder="Search for anything such as Horlicks, Surf etc.."/>
              </form>
          </div>
          <div className="action-buttons">
            <button className="btn btn-primary btn-review-cart" onClick={()=>this.props.toggleReviewCart()}>
                Review Cart
                <span className="count">{this.props.cartCount}</span>
            </button>
            <button className="btn btn-secondary load-cart">
                Load Recent Cart
            </button>
          </div>
      </header>
    )
  }
}
function mapStateToProps(state){
  return {
    cartCount : state.catalog.filter(product=>product.added).length
  }
}
export default connect(mapStateToProps)(HeaderComponent)
