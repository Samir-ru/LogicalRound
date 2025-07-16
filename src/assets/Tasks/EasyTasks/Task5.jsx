import React from 'react'
import { useState } from 'react'

export default function Task5() {
    const [input, setInput] = useState("")
  return (
    <div>
      <input type="text" onChange={(event) => setInput(event.target.value)} />
      <h1>{input}</h1>
    </div>
  )
}
