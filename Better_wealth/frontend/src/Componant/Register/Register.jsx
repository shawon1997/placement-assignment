import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import axios  from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [username,setUsername]=useState("")
  const [role,setRole]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [contact,setContact]=useState("")
  const toast = useToast();

  const handelsubmit=()=>{
    axios({
        url: "http://localhost:4800/signup",
        method: "POST",
        data: {
          username: username,
          role: role,
          email: email,
          password: password,
          contactnumber:contact
        },
      })
        .then((res) => {
            console.log(res)
          toast({
            title: "Account created.",
            position: "top",
            description: res.data.message,
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          if(role=='admin'){
            navigate("/admin")
          }
          else{
            navigate("/login")
          }
        })
        .catch((err) => {
            console.log("err")
          let a = err.response.data.error
            ? err.response.data.error
            : err.response.data.message;
  
          console.log(err);
          toast({
            title: "Error",
            position: "top",
            description: a,
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        });
       
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>username</FormLabel>
                  <Input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Role</FormLabel>
                  <Select placeholder="Select option" onChange={(e)=>setRole(e.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="email">
              <FormLabel>Contact Number</FormLabel>
              <Input type="number" value={contact} onChange={(e)=>setContact(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handelsubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link
             
                  onClick={() => navigate("/loginroute")}
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
