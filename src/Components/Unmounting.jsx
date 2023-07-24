import React from "react";

class Unmounting extends React.Component{
constructor(){
    super();
    this.state={
        show:true,
    }
}
removeHead = () => {
this.setState({
    show:false,
})
}
render(){
    let header;
    if(this.state.show){
        header=  <Header/>
    }
    return(
        <div>
          {header}
            <button onClick={this.removeHead}>Remove button</button>
        </div>
    )
}
}
export class Header extends React.Component{
    componentWillUnmount(){
        alert("Are you sure remove header?")
    }
  render(){
    return <h3>Remove Heading</h3>
  }
}
export default Unmounting