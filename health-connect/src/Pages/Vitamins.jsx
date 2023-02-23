import { useEffect, useState } from "react";
import axios from 'axios'
import {SearchIcon, StarIcon} from '@chakra-ui/icons'
import Footer from '../Components/Footer'
import { Badge, Box, Button, Card, CardFooter, Center, HStack, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Spinner, Text } from "@chakra-ui/react";


function Vitamins(){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [inputval, setInputval] = useState('')
    const [page,setPage] = useState(1)
    let totalpage=3;

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/multivitamins?p=${page}&l=15`)
        .then((res)=>{
            console.log(res.headers)
            setData(res.data)
            setLoading(false)
        })
    },[page])

    const handleInput=(e)=>{
        setInputval(e.target.value)
        axios.get(`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/multivitamins?search=${inputval}`)
        .then((res)=>{
            setData(res.data)
        })
    }

    if (loading) {
        return (
            <Spinner thickness='4px'
            mt={'15%'}
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'/>
        )
    } else{
        return (
            <Box>
            {/* Input box here */}
            <InputGroup w={['200px', '300px', '500px']} m={'auto'} mb={'20px'}>
            <InputLeftElement><SearchIcon></SearchIcon></InputLeftElement>
            <Input boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} onChange={handleInput} type={'text'} w={['200px', '300px', '500px']} placeholder={'Search'}></Input>
            </InputGroup>
            {/* Products here */}
            <Box ml={'15%'}>
            <SimpleGrid w={'90%'} m={'auto'} columns={[1,2,4]} gap={'10'}>
                {
                    data.map((el)=>(
                        <Card p={'10px'} borderRadius={'15px'} key={el.id} boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'}>
                        <Center>
                        <Image w={'120px'} h={'150px'} src={el.img}/>
                        </Center>
                        <Text color='black' fontWeight='semibold'>{el.title.substring(0,40)}...</Text>
                        <HStack justifyContent={'space-evenly'} m={'5px'}>
                        <Badge colorScheme={'teal'} p={'5px'} borderRadius='5px'>
                            <Center>
                            Rating: {el.rating}
                            <StarIcon />
                            </Center>
                        </Badge>
                        <Badge fontSize={'sm'} p={'5px'} borderRadius={'5px'} colorScheme={'orange'}>Rs.{el.price}</Badge>
                        </HStack>
                        <Center>
                        <CardFooter>
                            <Button variant={'solid'} colorScheme={'teal'}>Add to Cart</Button>
                        </CardFooter>
                        </Center>
                        </Card>
                    ))
                }
            </SimpleGrid>
            </Box>
            {/* Pagination */}
            <Box className="paginationBox" mt={'20px'}>
            <Button isDisabled={page==1} onClick={()=>setPage(page-1)} colorScheme={'orange'}>Previous</Button>
            <Button isDisabled={true}>{page}</Button>
            <Button isDisabled={page==totalpage} colorScheme={'orange'} onClick={()=>setPage(page+1)}>Next</Button>
            </Box>
            <Footer/>
            </Box>
        )
    }
}

export default Vitamins;