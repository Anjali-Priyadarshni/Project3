
import React from "react";
class C extends React.Component{

    componentDidMount(){
        console.log('child called')
    }
    render(){
        console.log('child render() called')
        return(
            <div>
                <h1>{this.props.number} times</h1>
            </div>
        )
    }
}
export default C;