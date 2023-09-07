
import React from "react";
import Header1 from "./header1";
import Carousal1 from "./carousal1";
import Card1 from "./card1";
import Footer1 from "./footer1";
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg"
import i5 from "../images/i5.jpg";
import i6 from "../images/i6.jpg";
 
 class Home1 extends React.Component {

     cardDetails = [

        {
            imgUrl:i1,
            imgName:"Year Phone",
            imgDes:"This is Avilable"
        },
        {
            imgUrl:i2,
            imgName:"BeautyProduct",
            imgDes: "Here avilable Beauty Product"
        },
        {
            imgUrl:i3,
            imgName:"Year Phone",
            imgDes:"Avilable"
        },
        {
            imgUrl:i4,
            imgName:"Mice",
            imgDes:"This is Avilable"
        },
        {
            imgUrl:i5,
            imgName:"Beauty Care",
            imgDes:"This is Avilable"
        },
        {
            imgUrl:i6,
            imgName:"LapTop",
            imgDes:"This is Avilable"
        }

     ];

    render () {

        return(
            
           <div>
                {/*<Headeder1></Headeder1>
                <Carousal1></Carousal1>*/}
                <Card1 cardDetails={this.cardDetails}></Card1>
                {/*<Card1 imgUrl={i2} imgName="Beauty Product" imgDes="Avilable"></Card1>
                <Card1 imgUrl={i3} imgName="Year Phone" imgDes="Avilable"></Card1>
                <Card1 imgUrl={i4} imgName="Mic" imgDes="Avilable"></Card1>
                <Card1 imgUrl={i5} imgName="Beauty care" imgDes="Avilable"></Card1>
                <Card1 imgUrl={i6} imgName="LapTop" imgDes="Avilable"></Card1>
                <Footer1></Footer1>*/}
            </div>
        )
    }
 }
 export default Home1;