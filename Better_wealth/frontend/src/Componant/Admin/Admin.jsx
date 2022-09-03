import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    useToast,
 
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const AdminLogin=()=>{
  const toast = useToast();
  const navigate = useNavigate();


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handelClick=()=>{
    axios({
      url: "http://localhost:4800/signin",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        //console.log(res)
        toast({
          title: "Login Successfull",
          position: "top",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/adminpanel")
      })
      .catch((err) => {
        toast({
          title: "Error",
          position: "top",
          description: err.response.data.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
   
  }

    return (
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
             
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handelClick}
                >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    )
}
