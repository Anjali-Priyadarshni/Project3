import { useState,useEffect } from "react";
import abc from "../demoCallback/abc";
function Post(){

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



    return(
        <>
           {data!=null && data.map((ab)=>{

            return(
                <div>
                    {ab.id}
                    {ab.title}
                    {ab.userId}
                    
                </div>
            )

           })}
        </>
    )
}
export default Post;