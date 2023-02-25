import { useEffect, useState } from "react";
import axios from 'axios'
import { SearchIcon, StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Card, CardFooter, Center, HStack, Image, Input, InputGroup, InputLeftElement,  Select, SimpleGrid, Spinner, Text, VStack, useToast } from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";

function getCurrentPage(val){
    let value=Number(val)
    if(typeof value===undefined && value<=0){
        value=1;
    }
    if(!value){
        value=1;
    }
    return value;
}


function Ashwagandha() {

    const [data, setData] = useState([])
    const [searchParam, setSearchParam] = useSearchParams();
    const [loading, setLoading] = useState(false)
    const [inputval, setInputval] = useState("")
    const [page, setPage] = useState(getCurrentPage(searchParam.get("page") || 1))
    const [order, setOrder] = useState("")
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || []);
    const toast= useToast()
    let totalpage = 3;
    let limit=15;
    const sortBy="price"

    let apiUrl;

    if(order && inputval){
        apiUrl=`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/ashwagandha?search=${inputval}&sortBy=${sortBy}&order=${order}`
    }
    else if(order){
        apiUrl=`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/ashwagandha?p=${page}&l=${limit}&sortBy=${sortBy}&order=${order}`
    }
    else{
        apiUrl=`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/ashwagandha?p=${page}&l=${limit}`
    }

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
    }

    useEffect(() => {
        setLoading(true)
        axios.get(apiUrl)
            .then((res) => {
                console.log(res.headers)
                setData(res.data)
                setLoading(false)
            })
    }, [page, order])

    useEffect(()=>{
        let paramobj={page, order};
        setSearchParam(paramobj);
    },[page, order])

    const handleInput = (e) => {
        setInputval(e.target.value)
        axios.get(`https://63f5f2b99daf59d1ad7eab23.mockapi.io/healthconnect/ashwagandha?search=${inputval}`)
            .then((res) => {
                setData(res.data)
            })
    }

    if (loading) {
        return (
            <Spinner thickness='4px'
                m={'10%'}
                speed='0.65s'
                emptyColor='gray.200'
                color='teal'
                size='xl' />
        )
    } else {
        return (
            <Box>
                <SimpleGrid gap={'15px'} w={'90%'} m={'auto'} columns={[1,1,1,2]} mb={'20px'}>
                    {/* Input box here */}
                    <InputGroup w={['200px', '300px', '400px']} m={'auto'}>
                        <InputLeftElement><SearchIcon></SearchIcon></InputLeftElement>
                        <Input boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} onChange={handleInput} type={'text'} w={['200px', '300px', '400px']} placeholder={'Search'}></Input>
                    </InputGroup>
                    {/* Sorting functionality */}
                        <Select onChange={(e)=>setOrder(e.target.value)} placeholder="Sort by" w={['200px', '300px', '400px']} boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px;'} m={'auto'}>
                            <option value={'asc'}>Price Low to High</option>
                            <option value={'desc'}>Price High to Low</option>
                        </Select>
                </SimpleGrid>
                {/* Products here */}
                <Box>
                    <SimpleGrid w={'90%'} m={'auto'} columns={[1, 2, 3, 4]} gap={'10'}>
                        {
                            data.map((el) => (
                                <Card p={'10px'} borderRadius={'15px'} key={el.id} boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;'}>
                                    <Link to={`/ashwagandha/${el.id}`}>
                                    <Center>
                                        <Image w={'120px'} h={'150px'} src={el.img} />
                                    </Center>
                                    <Text color='black' fontWeight='semibold'>{el.title.substring(0, 40)}...</Text>
                                    <HStack justifyContent={'space-evenly'} m={'5px'}>
                                        <Badge colorScheme={'teal'} p={'5px'} borderRadius='5px'>
                                            <Center>
                                                Rating: {el.rating}
                                                <StarIcon />
                                            </Center>
                                        </Badge>
                                        <Badge fontSize={'sm'} p={'5px'} borderRadius={'5px'} colorScheme={'orange'}>Rs.{el.price}</Badge>
                                    </HStack>
                                    </Link>
                                    <Center>
                                        <CardFooter>
                                            <Button variant={'solid'} colorScheme={'teal'} onClick={()=>addToCart(el)}>Add to Cart</Button>
                                        </CardFooter>
                                    </Center>
                                </Card>
                            ))
                        }
                    </SimpleGrid>
                </Box>
                {/* Pagination */}
                <Box className="paginationBox" mt={'20px'}>
                    <Button isDisabled={page == 1} onClick={() => setPage(page - 1)} colorScheme={'orange'}>Previous</Button>
                    <Button isDisabled={true}>{page}</Button>
                    <Button isDisabled={page == totalpage} colorScheme={'orange'} onClick={() => setPage(page + 1)}>Next</Button>
                </Box>
            </Box>
        )
    }
}

export default Ashwagandha;