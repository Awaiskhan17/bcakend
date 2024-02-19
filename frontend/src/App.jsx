import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
function App() {
  const [record, setJokes] = useState([])
useEffect(()=>{
  axios.get('/api/anima')
  .then((response)=>{
    setJokes(response.data)
  }).catch((error)=>{

    console.log(error)
  })
})
  return (
    <>
  <h1>chai or Music and Code</h1>
  <p>JOKES: {record.length}</p>
{
  record.map((joke)=>(
    <div key= {joke.name}>
    <h3>{joke.name}</h3>
      <h3>{joke.ranking}</h3>
      <p>{joke.mc}</p>
    </div>
  ))
}
    </>
  )
}

export default App
