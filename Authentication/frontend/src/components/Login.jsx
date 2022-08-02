import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
         <form 
        // onSubmit={}
         >
            <input placeholder='enter your email' type='email' />
            <input placeholder='enter your password' type='password' />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
