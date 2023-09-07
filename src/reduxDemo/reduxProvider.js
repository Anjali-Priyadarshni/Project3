import { Provider } from "react-redux";
import { createStore } from "redux";
import CART from "./cartIncreDecrement";
import CardDemo from "./CardDemo";
import { ADD_ITEM, DELETE_ITEM } from "./actionType";

const initialstate={
    itemno:0
}
 const redTest=(state=initialstate, abc)=>{
    switch(abc.type){
        case ADD_ITEM:
            return{
                ...state,
                itemno:state.itemno+1,
            };
        case DELETE_ITEM:
            return{
                ...state,
                itemno:state.itemno-1,
            };
        default:
            return state;

    }
}
const store = createStore(redTest);
function X () {
    return (
        <Provider store={store}>
            <div> X Component </div>
            <CART></CART>
            ----------------------------
            <CardDemo></CardDemo>
        </Provider>
    )
}

export default X;