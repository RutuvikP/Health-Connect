import { Box, InputGroup, InputLeftAddon, Flex, Stack, Heading, useColorModeValue, FormControl, FormLabel, Input, HStack, Button, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContextProvider";



function Checkout(){

  const toast=useToast();
  const navigate=useNavigate();
  // const {clearCart} = useContext(CartContext)

  function handleCheckout(){
    toast({
      title:"Order Placed!",
      status:'success',
      position:'top',
      isClosable:true,
    })
    navigate('/')
  }
    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Please Fill In Your Details
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input type='text' />
              </FormControl>
              <FormControl id="city" isRequired>
                <FormLabel>City</FormLabel>
                  <Input type={'text'} />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                <InputLeftAddon children='+91'/>
                  <Input type={'tel'} placeholder={'Phone Number'} />
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'orange.400'}
                  color={'white'}
                  _hover={{
                    bg: 'orange.500',
                  }}
                  onClick={handleCheckout}>
                 Place Order
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    )
}

export default Checkout;