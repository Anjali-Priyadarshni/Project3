
import { useState } from "react";
import ChildA from "./childusecallback";

function Prob(){

    const[add,setAdd]=useState(0);

    const addition = ()=>{

        setAdd(()=>add+1);
    }

    return(

        <div>
            <ChildA/>
            
            add:{add}<br/>

            <button onClick={addition}>+</button>
        </div>
    )

}
export default Prob;