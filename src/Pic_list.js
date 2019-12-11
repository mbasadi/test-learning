import React, {Component} from 'react'
import {connect} from 'react-redux'
 import {fetchPic} from './actions/index'
 import {bindActionCreators} from 'redux'

class PicList extends Component{

  constructor(props){
    super(props)
    this.props.fetchPic();
  }
  
   renderPics(pic){
 


     return (
       <div key={pic.id} >
          <img src={pic.url} alt="A cute orange cat lying on its back."/>
          <div >
          <p>{pic.title}</p>
  </div>
        </div>
    )
  }
  render(){
    if (!this.props.pics){
      return <div> Select a book</div>
    }
   
   
    return (
      
      <div >
        
{this.props.pics.map(c=>c.map(this.renderPics))}
    </div>
    )
  }
}
 function mapStateToProps ({pics}) {
   return {pics};

 }
 function mapDispatchToProps(dispatch){
   return bindActionCreators ({fetchPic:fetchPic},dispatch)
 }
export default connect (mapStateToProps,mapDispatchToProps)(PicList);
