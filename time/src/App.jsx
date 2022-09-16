import React, { useState, useEffect } from 'react'
import quotes from './quotes'
import moment from 'moment'

function App() {
  const [quote, setQuote] = useState("'We go back and forth between being time’s master and its victim.' — James Gleick")
  const generate = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    setInterval(() => setTime(new Date()), 100)
  })
  return (
    <div className='w-full bg-gradient-to-r from-zinc-100 to-zinc-500 h-screen flex justify-center items-center flex-col'>
      <div className='text-3xl'>{moment(time).format('LLLL')}</div>
      <div className='mx-10 text-4xl text-center'>{quote}</div>
      <button className='p-5 mt-10 bg-zinc-300 shadow-md hover:shadow-2xl hover:text-zinc-100 hover:bg-zinc-500 transition-all' onClick={() => generate()}>generate a new quote</button>
    </div>
  )
}
export default App;