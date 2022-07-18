import { createContext, useState } from "react";
import data from "./Data/data"
export const CartContext = createContext({})

const {Provider} = CartContext


export const CartProvider = ({defaultValue = [], children}) =>{
    const [cart,setCart] = useState (defaultValue);

    const clearCart = () => {
        setCart([]);
    }
    
    const addToCart = (item , quantity) =>{
        setCart(
            [
                ...cart,
                {
                    item:item,
                    quantity:quantity
                }
            ]
        )
    }
    const context = {
        clearCart,
        addToCart
    }
    return(
        <Provider value = {context}>
            {children}
        </Provider>
    )

}