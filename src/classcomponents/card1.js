
import React from "react";
class Card1 extends React.Component {
    render () {
        return (
            this.props.cardDetails.map((cardinfo)=>{
            return (
            <div>
                <div className ="card">
                    <img src= {cardinfo.imgUrl} alt="Avtar" width={100} height={100}></img>
                    <div className="container">
                        <h4><b>{cardinfo.imgName}</b></h4>
                        <p>{cardinfo.imgDes}</p>
                    </div>
                </div> 
            </div>)
            })
        )
    }

    

}
export default Card1;