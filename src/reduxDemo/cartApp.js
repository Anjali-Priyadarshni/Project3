import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./cart";


function cartAPP() {
    return(
        <Provider store={store}>
            <div>
            App Component
        </div>
        <Cart/>
        </Provider>
        
    )
}
export default cartAPP;