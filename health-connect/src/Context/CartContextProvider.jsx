import { useToast } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

function CartContextProvider({children}){
    const [cartData, setCartData] = useState([]);
    const toast=useToast();

    useEffect(()=>{
        const cartItems=JSON.parse(localStorage.getItem('cartData')) || [];
        setCartData(cartItems)
    },[]);

    const addToCart=(product)=>{
        const productInCart = cartData.find(item => item.id === product.id)
        if(productInCart){
            toast({
                      title: `Product is already in cart`,
                      status: 'info',
                      position:'top',
                      duration: 2000,
                      isClosable: true,
                    })
        }else{
            setCartData([...cartData,{...product, quantity:1}]);
            localStorage.setItem('cartData', JSON.stringify([...cartData,{...product, quantity:1}]))
            toast({
                title: `Product Added To Cart`,
                status: 'success',
                position:'top',
                duration: 2000,
                isClosable: true,
              })
        }
    };

    const handleDelete=(itemtoDelete)=>{
        const updatedCart=cartData.filter(item=>item.id!==itemtoDelete.id);
        setCartData(updatedCart);
        localStorage.setItem('cartData',JSON.stringify(updatedCart))
    };

    const handleIncrease=(item)=>{
        const updatedCart=cartData.map((el)=>{
            if(el.id===item.id){
                return {...el,quantity:el.quantity+1}
            }
            return el;
        })
        setCartData(updatedCart)
        localStorage.setItem('cartData',JSON.stringify(updatedCart))
    };

    const handleDecrease=(item)=>{
        const updatedCart=cartData.map((el)=>{
            if(el.id===item.id){
                return {...el,quantity:el.quantity-1}
            }
            return el;
        })
        setCartData(updatedCart)
        localStorage.setItem('cartData', JSON.stringify(updatedCart))
    };

    const cleanCart=()=>{
        setCartData([]);
    }

    const cartCount=cartData.reduce((count,item)=>count+item.quantity,0)

    return(
        <CartContext.Provider value={{cartData,addToCart,handleDelete,cartCount,handleIncrease,handleDecrease, cleanCart}}>{children}</CartContext.Provider>
    )
}

export default CartContextProvider;