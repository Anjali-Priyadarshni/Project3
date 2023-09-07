import { useState } from "react"

export function UseM() {

    const[add,setAdd] = useState(0);
    const[minus,setMinus]=useState(100);

    const addition = () => {
        setAdd(()=>add+1);
    }

    const subtraction = () => {
        setMinus(()=>minus-1);
    }

    function multiply (){
        return add*10;
    }

    return(
        <div>
            <h1> Learning UseMemo </h1>
            {multiply}<br/>
            <button onClick={addition}>+</button>
            {add}
            <br/>
            <button onClick={subtraction}>-</button>
            {minus}

        </div>
    )

}