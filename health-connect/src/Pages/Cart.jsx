import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";


function Cart() {

    const [cartData, setCartData] = useState([]);
    const cart = JSON.parse(localStorage.getItem('cartData')) || [];
    

    console.log(cartData)
    useEffect(()=>{
        if(cart){
        setCartData(cart)
        }
    },[])


    return (
        <Box w={'70%'} m={'auto'}>
            {
                cartData.map((el) => (
                    <SimpleGrid border={'1px solid black'} key={el.id} m={'10px'} p={'5px'} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}>
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
                        <VStack w={'60%'}>
                        <Text >{el.title}</Text>
                        <HStack>
                        <Button><DeleteIcon/>Remove</Button>
                        <Button colorScheme={'orange'}>Checkout</Button>
                        </HStack>
                        </VStack>
                        <VStack w={'40%'}>
                        <Text fontWeight={'bold'}>Rs. {el.price*el.quantity}</Text>
                        <HStack>
                            <Button>+</Button>
                            <Button>{el.quantity}</Button>
                            <Button>-</Button>
                        </HStack>
                        </VStack>
                        </Box>
                    </SimpleGrid>
                ))
            }
        </Box>
    )
}

export default Cart;