import React from "react"

import CounterApp from "./Counter App"

class CounterMain extends React.Component{
  constructor(props){
    super(props)
      this.state={
        countAll:0
      }
    }
    incrementAll = (value)=> {
if(this.state.countAll<100){
this.setState({
  countAll:this.state.countAll + value
})
}
   }
   decrementAll = (value)=> {
    if(this.state.countAll>0){
    this.setState({
      countAll:this.state.countAll - value
    })
    }
        }
        reset = ()=> {
          this.setState({
            countAll:0
          })
        }
render(){
  return(
    <div>
       <h3>Counter App</h3>
     <CounterApp incre={1} increAll={this.incrementAll} decreAll={this.decrementAll}/>
     <CounterApp incre={5} increAll={this.incrementAll} decreAll={this.decrementAll}/>
     <CounterApp incre={10}increAll={this.incrementAll} decreAll={this.decrementAll}/>
     <div>{this.state.countAll}</div>
     <button className="btn btn-danger" onClick={this.reset}>Reset</button>
    </div>
  )
}
}

export default CounterMain;
