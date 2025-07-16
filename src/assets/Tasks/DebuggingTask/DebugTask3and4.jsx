import React from 'react'

export default function DebugTask1() {

      const [count, setCount] = React.useState(0);
function increment() {
      setCount((prev, current) => current = prev + 1)
    }
   

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => increment()}>Click</button>
    </div>
  )
}
