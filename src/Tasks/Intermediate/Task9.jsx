import React, { useState } from 'react'

export default function Task9() {
    const [input, setInput]  = useState("")

    function frequencyOfEach(str) {
        const charCount = {}
        for (let i = 0; i < str.length; i++){
            charCount[str[i]] = charCount[str[i]] + 1 || 1
        }
        console.log(charCount)
    }
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => frequencyOfEach(input)}> click and view console</button>
    </div>
  )
}
