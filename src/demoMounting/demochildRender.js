 import React from "react";
 import C from "./childRender";
 
 class D extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }

    componentDidMount(){
        console.log('Parent called');
    }

    incrementHandler=()=>{
        this.setState(state =>({counter:state.counter+1}))
    }

     render(){
        console.log('Parent render() called');
        return(
            <div>
            <button onClick={this.incrementHandler}>Increment</button>
            <C number={this.state.counter}/>
            </div>
        )
     }
 }
 export default D;

