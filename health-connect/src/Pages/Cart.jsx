import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Center, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";


function Cart() {

    // const [cartData, setCartData] = useState([]);
    const {cartData,handleDelete, handleIncrease, handleDecrease, cleanCart}=useContext(CartContext)
    const navigate = useNavigate();
    

    
    // useEffect(()=>{
    //     const cart=JSON.parse(localStorage.getItem('cartData')) || [];
    //     setCartData(cart)
    // },[])

    // const handleDelete=(itemtoDelete)=>{
    //     const updatedCart=cartData.filter(item=>item.id!==itemtoDelete.id);
    //     setCartData(updatedCart);
    //     localStorage.setItem('cartData',JSON.stringify(updatedCart))
    // }

    // const handleIncrease=(item)=>{
    //     const updatedCart=cartData.map((el)=>{
    //         if(el.id===item.id){
    //             return {...el,quantity:el.quantity+1}
    //         }
    //         return el;
    //     })
    //     setCartData(updatedCart)
    //     localStorage.setItem('cartData',JSON.stringify(updatedCart))
    // }

    // const handleDecrease=(item)=>{
    //     const updatedCart=cartData.map((el)=>{
    //         if(el.id===item.id){
    //             return {...el,quantity:el.quantity-1}
    //         }
    //         return el;
    //     })
    //     setCartData(updatedCart)
    //     localStorage.setItem('cartData', JSON.stringify(updatedCart))
    // }

    const totalPrice=cartData.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)

    const handleCheckout=()=>{
        localStorage.removeItem('cartData')
        cleanCart()
        navigate('/checkout')
    }

    if(cartData.length===0){
        return(
            <Center>
                <Text fontWeight={'bold'} fontSize={'2xl'}>Your Cart is Empty!!</Text>
            </Center>
        )
    }else{
        return (
            <Box w={'70%'} m={'auto'}>
                <Text fontWeight={'bold'} fontSize={'3xl'}>Total Cart Price is: Rs. {totalPrice}</Text>
                {
                    cartData.map((el,i) => (
                        <SimpleGrid border={'1px solid black'} key={el.id} m={'10px'} p={'5px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                            <VStack w={'60%'}>
                            <Text >{el.title}</Text>
                            <HStack>
                            <Button onClick={()=>handleDelete(el)}><DeleteIcon/>Remove</Button>
                            </HStack>
                            </VStack>
                            <VStack w={'40%'}>
                            <Text fontWeight={'bold'}>Rs. {el.price*el.quantity}</Text>
                            <HStack>
                                <Button borderRadius={'50%'} colorScheme={'orange'} onClick={()=>handleIncrease(el)}>+</Button>
                                <Button>{el.quantity}</Button>
                                <Button borderRadius={'50%'} colorScheme={'orange'} isDisabled={el.quantity==1} onClick={()=>handleDecrease(el)}>-</Button>
                            </HStack>
                            </VStack>
                            </Box>
                        </SimpleGrid>
                    ))
                }
                <Button colorScheme={'orange'} onClick={handleCheckout}>Checkout</Button>
            </Box>
        )
    }
}

export default Cart;