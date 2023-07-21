import React from "react";

class Updating extends React.Component{

   constructor(){
       super()

       this.state={
           myColor:"blue"
       }
   }
  // static getDerivedStateFromProps(props, state){
   //    return{
   //     myColor: props.favColor
   //    }
   // }

   shouldComponentUpdate(){
    return true;
   }

   changeColor=()=>{
    this.setState({
     myColor:"greenyellow"
   });

   }
   render(){
       return(
        <div>
           <h3 style={{color:this.state.myColor}}>My favourite color is {this.state.myColor}</h3>
           <button className="btn btn-primary" onClick={this.changeColor}> Change my color to greenyellow</button>
           <div id="prevColor"></div>
           <div id="currentColor"></div>
           </div>
       )
   }

   getSnapshotBeforeUpdate(previousProps, previousState){
    console.log(previousState.myColor)
    document.getElementById("prevColor").innerHTML=`My Previous favourite color is ${previousState.myColor}`
    return previousState.myColor;

   }

   componentDidUpdate(props, state, snapshot){
    console.log(this.state.myColor, snapshot)
    document.getElementById("currentColor").innerHTML=`My Current favourite color is ${this.state.myColor}`
   }
}

export default Updating;