import React from "react";
import './css/style.css'

 class CounterApp extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  increment = () =>{
   if(this.state.count<100){
    this.setState({
      count:this.state.count +this.props.incre
    })
   }
   this.props.increAll(this.props.incre);
  }
  decrement = () =>{
    if(this.state.count>0){
      this.setState({
        count:this.state.count -this.props.incre
      })
    }
    this.props.decreAll(this.props.incre)
  }
  render(){
    return(
      <div>
       <div className="btns">
        <button className="btn btn-success"  onClick={this.increment}>+{this.props.incre}</button>
        {/* <div className="value">{this.state.count}</div> */}
        <button className="btn btn-success" onClick={this.decrement}>-{this.props.incre}</button>
        </div>
      </div>
    )
  }
}
export default CounterApp; 