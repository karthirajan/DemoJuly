import React from "react";

class Mounting extends React.Component{
constructor(){
    super();
    this.state={
     myColor:"blue"
    }
}
// static getDerivedStateFromProps(props){      // color always red
//     return{
//         myColor:props.favColor
//     }
// }
shouldComponentUpdate(){
    return true
}
colChange = () => {
    this.setState({
        myColor:"gray"
    })
}
render(){
    return(
       <div>
         <h3 style={{color:this.state.myColor}}>My favorite color is {this.state.myColor}</h3>
        <button onClick={this.colChange}>Color change to gray</button>
        <div id="col1"></div>
        <div id="col2"></div>
       </div>
    )
}
getSnapshotBeforeUpdate(prevprop, prevstate){
    console.log(prevstate.myColor);
    document.getElementById("col1").innerHTML=`My previous fav Color ${prevstate.myColor}`
    return prevstate.myColor
}
componentDidUpdate(props,state,snapshot){
console.log(this.state.myColor, snapshot)
document.getElementById("col2").innerHTML=`My current fav Color ${this.state.myColor}`
}

}

export default Mounting;