import React from 'react'
import { Authdata } from './Authdata'

export const SignIn = () => {
    const handlesubmit=(e)=>{
    e.preventDefault()
console.log(e)
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <input type='text' placeholder='username'></input>
        <input type='password' placeholder='password'></input>
        <input type='submit'></input>
        </form>
    </div>
  )
}
