
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Center, ListItem, Spinner, Image, Text,  Spacer, SimpleGrid, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";



function SingleAshwagandhaPage() {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false)
    // const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || []);
    const {cartData, addToCart}=useContext(CartContext)
    // const toast= useToast()
    let params=useParams();
    console.log(params)

    const fetchNupdateData=(id)=>{
        setLoading(true)
        axios.get(`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/ashwagandha/${id}`)
        .then((res)=>{
            console.log(res)
            setData([res.data])
            setLoading(false)
        })
    }

    // const addToCart=(product)=>{
    //     const productInCart = cartData.find(item => item.id === product.id)
    //     if(productInCart){
    //         toast({
    //                   title: `Product is already in cart`,
    //                   status: 'info',
    //                   position:'top',
    //                   duration: 2000,
    //                   isClosable: true,
    //                 })
    //     }else{
    //         setCartData([...cartData,{...product, quantity:1}]);
    //         localStorage.setItem('cartData', JSON.stringify([...cartData,{...product, quantity:1}]))
    //         toast({
    //             title: `Product Added To Cart`,
    //             status: 'success',
    //             position:'top',
    //             duration: 2000,
    //             isClosable: true,
    //           })
    //     }
    // }

    useEffect(()=>{
        fetchNupdateData(params.id)
    },[params.id])



    return loading?(
        <Spinner thickness='4px'
                m={'10%'}
                speed='0.65s'
                emptyColor='gray.200'
                color='teal'
                size='xl' />
    ) : (
        <Box>
            {
                data.map((el) => (
                    <SimpleGrid key={el.id} columns={[1,1,2]} gap={'5'} w={'70%'} m={'auto'}>
                        <Center>
                        <Image w={'50%'} h={'200px'} src={el.img}  m={'20px'}></Image>
                        </Center>
                        <Box>
                            <Text  fontWeight={'bold'} fontSize={'20px'}>{el.title}</Text>
                            <Spacer/>
                            <Badge fontSize={'18px'} colorScheme={'orange'}>Rs. {el.price}</Badge>
                            <Text fontWeight={'bold'}>Product Description :</Text>
                            <Text>{el.description}</Text>
                            <Button colorScheme={'orange'} mt={'20px'} onClick={()=>addToCart(el)}>Add to Cart</Button>
                        </Box>
                    </SimpleGrid>
                ))
            }
        </Box>
    )
}

export default SingleAshwagandhaPage;