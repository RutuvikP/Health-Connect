
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Center, ListItem, Spinner, Image, Text,  Spacer, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// let data = [
//     {
//         id: "1",
//         title: "Tata 1mg Women's Multivitamin Veg Tablet with Zinc, Vitamin C, Calcium, Vitamin D and Iron, Support Immunity, Bones & Overall Health",
//         rating: "4.4",
//         price: "348",
//         img: "https://onemg.gumlet.io/images/q_auto,f_auto,w_150,c_fit,h_150/qh1au45w8u7cfvf3lg3i/tata-1mg-women-s-multivitamin-veg-tablet-with-zinc-vitamin-c-calcium-vitamin-d-and-iron-support-immunity-bones-overall-health.jpg"
//     }
// ]



function SingleVitaminsPage() {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false)
    let params=useParams();
    console.log(params)

    const fetchNupdateData=(id)=>{
        setLoading(true)
        axios.get(`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/multivitamins/${id}`)
        .then((res)=>{
            console.log(res)
            setData([res.data])
            setLoading(false)
        })
    }

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
                            <Badge m={'10px'} colorScheme={'green'} p={'5px'}>Rating: {el.rating} <StarIcon /></Badge>
                            <Spacer/>
                            <Badge fontSize={'18px'} colorScheme={'orange'}>Rs. {el.price}</Badge>
                            <Text fontWeight={'bold'}>Product Description :</Text>
                            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus velit expedita necessitatibus sit consectetur explicabo nostrum accusamus beatae, minima officia nisi eius, nulla quisquam dolor, illo voluptates non nesciunt. Voluptatem?</Text>
                            <Button colorScheme={'orange'} mt={'20px'}>Add to Cart</Button>
                        </Box>
                    </SimpleGrid>
                ))
            }
        </Box>
    )
}

export default SingleVitaminsPage;