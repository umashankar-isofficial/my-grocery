import React from 'react'
import HeaderComponent from './header-comp'
import SideBar from './sidebar'
import RightPaneLayout from './right-pane-layout'

export default class HomePage extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        showReviewCart : false
      }
    }
    toggleReviewCart = ()=>{
      this.setState((prevState)=>({
        showReviewCart : !prevState.showReviewCart
      }))
    }
    render(){
        const catId = this.props.match.params.catId;
        return (
          <div className="home-page container">
              <HeaderComponent toggleReviewCart={this.toggleReviewCart} />
              <main>
                <SideBar />
                <RightPaneLayout
                        selectedCategory={catId}
                        showReviewCart={this.state.showReviewCart}
                        toggleReviewCart={this.toggleReviewCart} 
                />
              </main>
          </div>
        )
    }
}
