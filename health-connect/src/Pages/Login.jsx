import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
  } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../Context/AuthContextProvider'
  
  export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setIsAuth} = useContext(AuthContext)
    const toast=useToast()
    const navigate= useNavigate()

    const handleLogin=()=>{
      const userData = JSON.parse(localStorage.getItem('userData')) || [];

      const isUserAuthenticated=userData.find(el=> el.email==email && el.password==password)

      if(isUserAuthenticated){
        setIsAuth(true)
        toast({
          title:"Login Successfull",
          status:'success',
          duration:4000,
          position:'top',
          isClosable:true
      })
      navigate('/')
      }else if(userData.find(el=>el.email!==email && el.password!==password)){
        toast({
          title:"Please Signup First!",
          status:'info',
          duration:4000,
          position:'top',
          isClosable:true
      })
      navigate('/signup')
      }else if(userData.find(el=>el.email===email)){
        toast({
          title:"Wrong Password",
          status:'warning',
          duration:4000,
          position:'top',
          isClosable:true
      })
      }else{
        toast({
          title:"Wrong Password",
          status:'warning',
          duration:4000,
          position:'top',
          isClosable:true
      })
      }
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Log in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.500'} href={'/signup'}>Not a member?</Link>
                </Stack>
                <Button
                  bg={'orange.400'}
                  color={'white'}
                  _hover={{
                    bg: 'orange.500',
                  }}
                  onClick={handleLogin}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }