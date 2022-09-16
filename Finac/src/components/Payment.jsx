import React from 'react'
import { useSelector } from 'react-redux'
import { Nav } from './Nav'

export const Payment = () => {
    let cartdata=useSelector((state)=>state?.cart) 
  return (
    <div>
    <Nav/>
    Payment</div>
  )
}
