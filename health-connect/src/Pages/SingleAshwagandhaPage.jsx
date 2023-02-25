
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Button, Center, ListItem, Spinner, Image, Text,  Spacer, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function SingleAshwagandhaPage() {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false)
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
                            <Text>{el.description}</Text>
                            <Button colorScheme={'orange'} mt={'20px'}>Add to Cart</Button>
                        </Box>
                    </SimpleGrid>
                ))
            }
        </Box>
    )
}

export default SingleAshwagandhaPage;