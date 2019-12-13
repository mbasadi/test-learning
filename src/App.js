import React, {Component} from 'react'
import {connect} from 'react-redux'
 import {fetchPic} from './actions/index'
 import PicList from './PicList'
 import {bindActionCreators} from 'redux'
class App extends Component{
  
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchPic();
  }
  
  render(){
    return (
      <PicList picsL={this.props.pics}/>
    )
  }
}

 function mapStateToProps ({pics}) {
   return {pics};
 }

 function mapDispatchToProps(dispatch){
   return bindActionCreators ({fetchPic:fetchPic},dispatch)
 }
export default connect (mapStateToProps,mapDispatchToProps)(App);
