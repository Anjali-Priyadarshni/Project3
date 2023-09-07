import { useState,useEffect } from "react";

function FavColor() {
//    const [color, setColor] =useState("Request");

//    function color1111() {
//     setColor("Accepted");
//    }

//        // setColor("black");

//     return (
        
//         <div>

//             <button onClick={color1111}>
//                 {color}
//             </button>


//             <h1>My Favorite color is {color}</h1>
//            {/* <button
//                 type="button"
//                 onClick={()=> setColor("blue")}>blue
//                 </button>*/}
//         </div>
//     )

    const [count, setCount]=useState(2);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
         } );

    },[]);

    return (
        <div>
            {count}
        </div>
    )
        
}

export default FavColor;