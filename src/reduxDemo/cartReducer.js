import { ADD_ITEM,DELETE_ITEM } from "./actionType";

const initialstate={
    noOfItems:0,
};

 export const cartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case ADD_ITEM:
            return{
                ...state,
                noOfItems:state.noOfItems+1,
            };
        case DELETE_ITEM:
            return{
                ...state,
                noOfItems:state.noOfItems-1,
            };
        default:
            return state;
    }
};