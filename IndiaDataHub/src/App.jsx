import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Home } from './components/Home'
import { AvgTime } from './components/AvgTime'
import { Top10 } from './components/Top10'
import { AvgTimeAdopt } from './components/AvgTimeAdopt'
import { Proportion } from './components/Propertion'
//import { Top10 } from './components/Top10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <h1>Last Hope K9</h1>
      <h2>Where a last hope becomes a new beginning</h2>
      <h1>Lives Saved</h1>
      <h1>10,875</h1>
      <Home/>
      </div>
      <div className='display'>
        <div>
      <h1>Avg Time to Adopt</h1>
      <h1>45 days</h1>
       <AvgTimeAdopt/>
       <br></br>
       <br></br>
        <AvgTime/>
      
        </div>
        <div>
        <h1>Characteristics</h1>
      <Proportion/>
      <br></br>
       <br></br>
        <Top10/>
        </div>
      </div>
    </div>
  )
}

export default App
