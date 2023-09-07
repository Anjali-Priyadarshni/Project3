
import Header from "./header";
import Carousal from "./carousal";
import Card from "./card";
import Footer from "./footer";
import i1 from "../images/i1.jpg"
import i2 from "../images/i2.jpg"
import i3 from "../images/i3.jpg"
import i4 from "../images/i4.jpg"
import i5 from "../images/i5.jpg"
import Demo1 from "../demoques/demo1";
import FavColor from "./hooksMethod";
import App from "./useRefMethod";
import { useEffect, useState } from "react";
import Post from "./demoUsememo/postDetail";



function Home () {

    const[data,setData] = useState();

useEffect(()=>{
//alert("hhhhhhh")
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
.then(aaa=>aaa.json())
.then(abc=>{
    setData(abc);
console.log(abc);
})
} ,[])

let cardDetails = [
    {
        imgUrl:i1,
        imgName:"Electronics",
        imgDes:"This is electronic section"
    },{
        imgUrl:i2,
        imgName:"BeautyProduct",
        imgDes: "Here avilable Beauty Product"
    },{
        imgUrl:i3,
        imgName:"Grossary",
        imgDes:""
    },{
        imgUrl:i4,
        imgName:"Electronics",
        imgDes:""
    },
    {
        imgUrl:i5,
        imgName:"Electronics",
        imgDes:""
    }
    ];


    return (
        <div>
            <Header></Header>
            <Carousal></Carousal>
            
            <Card cardDetails={cardDetails} xyz={data}></Card>
            {/* <Post xyz={data}></Post> */}
            {/* <Card imgUrl={i2} imgName="john" imgDes="A & E"></Card>
            <Card imgUrl={i3} imgName="Avkash" imgDes="Engineer"></Card>
            <Card imgUrl={i4} imgName="Aniket" imgDes="Engg"></Card>
            <Card imgUrl={i5} imgName="Ankur" imgDes="Electronic & engineer"></Card>  */}
            <Footer></Footer>
            <Demo1></Demo1>
           {/* <App></App>*/}
        </div>
    )
}
export default Home ;