import React from 'react'

export default function Task11() {
        const [input, setInput] = React.useState("")

    function firstUniqueChar(str) {
        const charCount = {}
        for (let i = 0; i < str.length; i++){
            charCount[str[i]] = charCount[str[i]] + 1 || 1
        }
        for (let i = 0; i < str.length; i ++){
            if (charCount[str[i]] ===1){
                console.log(`First unique character is: ${str[i]}`)
                break
            }
        }
    }


  return (
    <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => firstUniqueChar(input)}> click and view console</button>
    </div>
  )
}
