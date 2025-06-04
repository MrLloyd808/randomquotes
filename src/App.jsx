import { useState, useEffect } from 'react'
import './App.css'
import { arrObjOfQuotes as array } from '../array'

function App() {
  const [quotes, setQuote] = useState([])
  
  useEffect( () => {
    const myQuotes = array[Math.floor(Math.random() * array.length)]
    setQuote([myQuotes])
  }, [])

  if(!quotes) {
    return <div>Loading...</div>
  }

  return (
    <>
   {quotes.map((item, i) => {
    return (
      <>
      <p>{item.quote}</p>
      <h4>{item.author}</h4>
      </>
    )
   })}
    </>
  )
}

export default App
