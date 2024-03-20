import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    // Dette er litt for enkelt til å fungere perfekt
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}