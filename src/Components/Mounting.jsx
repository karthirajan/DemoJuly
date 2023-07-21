 import React from "react";

 class Mounting extends React.Component{

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

    render(){
        return(
            <h3 style={{color:this.state.myColor}}>My favourite color is {this.state.myColor}</h3>
        )
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                myColor:"green"
            })
        }, 4000);
    }
 }

 export default Mounting;