
import { memo } from "react";

function ChildA (){

    console.log("Child Render");

    return(
        <>
        Anjali
        </>
    )
}
export default memo(ChildA);

//export default ChildA;