import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1)

  useEffect(() => {
    const times = Math.floor(count / 3)
    setValue(Math.pow(2, times))
  }, [count])

  return (
    <>
      <h1>React Q1</h1>
      <button
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        Clicks: {count} | Value: {value}
      </button>
    </>
  )
}

export default App
