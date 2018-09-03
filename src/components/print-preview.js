import React from 'react'
import {connect} from 'react-redux'

class PrintPreview extends React.Component{
  constructor(props){
    super(props)
    this.state ={productsInCart : []};
  }
  componentDidMount(){
    if(!!window.localStorage){
      this.setState({
        productsInCart : JSON.parse(window.localStorage.getItem('products'))
      })
      window.print()
    }
  }
  render(){
    const $products = this.renderProducts();

    return (
      <div className='print-preview'>
        <div className="align-top-layout">
              {
                  !!$products.length &&
                                          <div className="table-header">
                                            <span>Product Name</span><span>Qty</span>
                                          </div>
              }
              {
                  !!$products.length &&
                                          <div className="content">
                                              <table cellSpacing="0">
                                                  <tbody>
                                                    {$products}
                                                  </tbody>
                                              </table>
                                          </div>
              }
        </div>
      </div>
    )
  }

  renderProducts(){
    return this.state.productsInCart.map(product=>{
      return (
        <tr key={product.id}>
          <td>
            {product.title}
          </td>
          <td>
            {product.units.qty + ' ' + product.units.display}
          </td>
        </tr>
      )
    })
  }

}



function mapStateToProps(state){
  return {
    productsInCart : state.catalog.filter(product => product.added)
  }
}


export default connect(mapStateToProps)(PrintPreview)
