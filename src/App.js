import {  useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {

  const [Quotes , setQuotes]=useState([])

  const getData = async()=>{
    const res = await fetch("https://api.quotable.io/random")
    const data = await res.json()
setQuotes(data)
  }

return (
    <>
    <Navbar/>

  <Main Quotes={Quotes} getData={getData} />
 
   </>
  )
}

export default App