import React from 'react'

export default class ShowImage extends React.Component{
  render(){
    const pageId = this.props.match.params.pageId;
    return (
      <img style={{width:"98vw"}} src={`/${pageId}.png`} />
    )
  }
}
