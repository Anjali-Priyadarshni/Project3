import React from "react";
import { ADD_ITEM, DELETE_ITEM } from "./actionType";
import { useSelector,useDispatch } from "react-redux";
import { addItem, deleteItem } from "./cartAction";

const Cart = () =>{

    const state = useSelector((state)=>state);
     console.log("store",state);
     const dispatch=useDispatch();

    return(
        <div className="cart">

            <h2>No of Items in Cart:{state.noOfItems}</h2>
            <button onClick={()=>{dispatch(addItem());}}>Add Item to cart</button>
            {ADD_ITEM}
            <br/>
            <button onClick={()=>{dispatch(deleteItem());}}>Remove Item from cart</button>
            {DELETE_ITEM}

        </div>
    );
};
export default Cart;