
import { useCallback, useState } from "react";
import ABC from "./abc";

function XYZ() {

    const[count,setCount]= useState(0);
    const[a,setA]=useState(0);

    const learn=useCallback(()=>{
        
    },[a])

    const increment=() => {
        setCount((c)=>c+1);
    };
    return(
        <div>
            <div>
            <ABC  learn={learn} a={a} />
            </div>
            
            <hr/>

            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2> A Button </h2>
                <button onClick={()=>setA(a+2)}>+</button>
            </div>
            
        </div>
    )
}
export default XYZ;