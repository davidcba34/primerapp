import { createContext, useState } from "react";
import data from "./Data/data"
export const CartContext = createContext({});

const {Provider} = CartContext


export const CartProvider = ({defaultValue = [], children}) =>{
    const [Item,setCart] = useState (defaultValue);

    const clearCart = () => {
        setCart([]);
    }
    
    const addToCart = (item , quantity) =>{
        console.log(item)
        if(isInCart(item.id)){
            const newCart = [...Item]
            for (const element of newCart){
                if(element.item.id ===item.id){
                    element.quantity =element.quantity + quantity;
                }
            }
            setCart(newCart);
        } else {

            setCart(
                [
                    ...Item,
                    {
                        item:item,
                        quantity:quantity
                    }
                ]
            )
        }
    }
      
    const isInCart = (id) =>{
        return Item.find((element) =>element.item.id === id)
    }

    const removeFromCart = (id) =>{
        const newCart = [...Item].filter(element => element.item.id !== id)
        setCart(newCart);
    }
    const getQuantity = () =>{
        let cantidad = 0
        Item.forEach ((element) => cantidad =cantidad + element.quantity)
        return cantidad
    }
    const getTotal = ()=> {
        let total = 0
        Item.forEach((element) =>{
            total = total + (element.quantity + element.item.price)
        })
        return total
    }
    
    const context = {
        Item,
        clearCart,
        addToCart,
        getQuantity,
        getTotal,
        removeFromCart
    }
    return(
        <Provider value = {context}>
            {children}
        </Provider>
    )

}