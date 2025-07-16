import React from 'react'

export default function Task3() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function evenNumbers(array){
        return array.filter(num => num % 2 === 0)
    }


  return (
    <div>
        <button onClick={() =>     console.log(evenNumbers(arr))}> click</button>
      and view console
    </div>
  )
}
