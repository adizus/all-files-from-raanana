import React,{Component} from 'react';
import {connect} from 'react-redux';

import singleDate from './singleDate';

class Dates extends Component{

 renderDate(){
   if(this.dates){
     there are dates
     this.dates.map(date=>{
       return <li key={date.title}><singleDate date={date.content}/></li>;
     });
    }
  }

  render(){
    return(
      <ul>
      inside dates
        {this.renderDate()}
      </ul>
    )
  }
}

const mapStateToProps=state=>{
  return{
      dates: state.dates
  }
}


export default connect(mapStateToProps)(Dates);
