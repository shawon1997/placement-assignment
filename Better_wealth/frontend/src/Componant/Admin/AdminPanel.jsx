//import {
//    Flex,
//    Box,
//    FormControl,
//    FormLabel,
//    Input,
//    Checkbox,
//    Stack,
//    Link,
//    Button,
//    Heading,
//    Text,
//    useColorModeValue,
//    useToast,
 
//  } from '@chakra-ui/react';
import axios from 'axios';
import './Admin.css'
import { useState,useEffect} from 'react';
//import { useNavigate } from 'react-router-dom';

export const AdminPanel=()=>{
    const [user,setUser]=useState([])
    useEffect(() => {
        axios.get('http://localhost:4800/adminpanel').then((res)=>{
        console.log(res.data)
        setUser(res.data)
    })
    }, []);
    
    return(
        <>
        <div>
        <h1> Admin Panel</h1>

        <h2>User details</h2>
            {user.map((e)=>(
                <div key={e._id} className='admin'>
                    <p>Username: {e.username}</p>
                    <p>Email: {e.email}</p>
                    
                </div>
            ))}
        </div>
        </>
    )
}