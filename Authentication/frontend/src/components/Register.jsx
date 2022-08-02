import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <form>
            <input placeholder='enter your name' type='string' />
            <input placeholder='enter your email' type='email' />
            <input placeholder='enter your password' type='password' />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
