import { useState } from 'react'

export default function Task1() {
 const [name, setName]  = useState("")
 const [reverse, setReverse] = useState("")

  const reverseName = () => {
    setReverse(name.split("").reverse().join(""))
  }
  return (
<div>
  <input type="text" onChange={(event) => setName(event.target.value)} />
  <button onClick={reverseName}>reverese</button>
 <h1>Reversed name: {reverse}</h1>
</div>
  )
}


