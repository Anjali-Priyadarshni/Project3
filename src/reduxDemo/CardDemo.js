import { useSelector,useDispatch } from "react-redux";
import { addItem, deleteItem } from "./cartAction";
import { ADD_ITEM, DELETE_ITEM } from "./actionType";
import X from "./reduxProvider";

const CardDemo = () =>{
    const state = useSelector((state)=>state);
    console.log("store",state);
    const dispatch = useDispatch();

    return (
        <div className="CardDemo">

            <h2>Total No of Item in card:{state.itemno}</h2>
            <button onClick={()=>{dispatch(addItem());}}>Add ItemNo one by one</button>
            {ADD_ITEM}
            <br/>
            <button onClick={()=>{dispatch(deleteItem());}}>Delete ItemNo one by one</button>
            {DELETE_ITEM}

        </div>
    )
    }
export default CardDemo;