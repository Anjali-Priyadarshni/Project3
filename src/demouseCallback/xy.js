import { useCallback, useState } from "react";
import AB from "./ab";

function XY() {

    const[add,setAdd] = useState(0);
    const[count,setCount] = useState(0); 

    const addition = ()=>{
        setAdd(()=>add+1)
    }

    const counting = useCallback(()=>{
        setCount(()=>count+2)
    },[count]);

return (

    <div>
        <AB counting={counting} />
        <div>
        <h2> Addition </h2>
        <button onClick={addition}>+</button>
        {add}
        </div>
        <hr/>
        <div>
            <h2> Counting </h2>
            <button onClick={counting}>+</button>
            {count}
        </div>
    </div>
)

}
export default XY;