
import { useState } from "react";
import WithArgs from "./childWargs";


function Additionuse () {

const[add,setAdd]=useState(0);
const[count,setCount]=useState(0)

    const addition = ()=>{

        setAdd(()=>add+1);
    }

    const learning=()=>{
        setCount(()=>count+1);

    }

    return(
        <div>
            <WithArgs learning={learning}></WithArgs>
            <h2>Addition</h2>
            <button onClick={addition}>+</button>
            {add}
            <br/>
            <h2>Learn UseCallback</h2>
            <button onClick={learning}>+</button>
            {count}
        </div>
    )
}
export default Additionuse;