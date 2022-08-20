import React from 'react'
import { useNavigate} from 'react-router-dom';
import {
    Box,
    Flex,
    Link
  } from "@chakra-ui/react";

export const LoginRoute = () => {
    const navigate = useNavigate();
  return (
    <Flex style={{gap:'5px', margin:'100px'}}>
    <Box style={{border:'1px solid'}}>
    <Link onClick={() => navigate("/login")} >   
        User Login
           </Link>
           </Box>
    
           <Box style={{border:'1px solid'}}><Link onClick={() => navigate("/admin")}
           >  
        Admin Login
           </Link>
        </Box>
    </Flex>
  )
}
