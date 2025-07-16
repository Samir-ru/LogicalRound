import React, { useState } from 'react'

export default function Task8() {
    const [input, setInput] = useState("")

    function checkPalindrome(str){
        const reverse = str.split("").reverse().join("")

        if (str === reverse){
            return true
        }
        else 
            return false
    }

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}/> <br />
        {checkPalindrome(input)? "yes": "not palindrome"}
    </div>
  )
}
