import React from "react";

class A extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data:'Anjali'
        }

    }
    fetchData() {
        setTimeout(()=>{
            console.log('our data is fetched');
            this.setState({
                data:'Hello Anjali'
            })

        },1000 )
    }

    componentDidMount(){
        
        this.fetchData();
    }

    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )
    }

}
export default A;