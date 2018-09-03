import React from 'react'
import {connect} from 'react-redux'
import * as actions from './../actions/actions'

class ProductCatalog extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      const selectedCategory = this.props.selectedCategory;
      const products = this.filterProducts(selectedCategory)
      return (
          <div className="catalog">
              {products}
          </div>
      )
    }
    filterProducts(selectedCategory){
            return  this.props.products
                        .filter(({category})=>{
                          return category == selectedCategory || selectedCategory == 'all-cat'
                        })
                        .map(({image, title, id, added}) => {
                          return (
                            <div className={`product has-hover ${added ?'added':''}`} key={id} >
                                <div className="header">
                                  {title}
                                </div>
                                <img src={image} className="image"/>
                                <div className="show-on-hover">
                                    <div className="bg"></div>
                                    <button className="btn btn-outlined" onClick={()=>{this.props.addToCart(id)}}>Add to Cart</button>
                                </div>
                            </div>
                          )
                        })
    }

}

function mapStateToProps(state){
  return {
    products: state.catalog
  }
}

function mapDispatchToPros(dispatch,ownProps){
  return {
    addToCart : (id)=>{
      dispatch(actions.addToCart(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToPros)(ProductCatalog)
