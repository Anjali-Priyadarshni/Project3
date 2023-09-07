import { useState } from "react"

function CART () {

    const [add , incre] = useState(0)
    const [minus , decre] = useState(100)

    const cartInc = ()=> {
        incre(()=>add+1);
    }

    const cartDecre = ()=> {
        decre(()=>minus-1);
    }

    return (
        <div>

            <button onClick={cartInc}>+</button>
            {add}
            <br/>
            <button onClick={cartDecre}>-</button>
            {minus}

        </div>
    )
}
export default CART;