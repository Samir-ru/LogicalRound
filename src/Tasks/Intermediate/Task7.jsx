import React from 'react'

export default function Task7() {
    const nested = [1, [2, [3, 4], 5], 6]
        
    function flatten (arr){
      return arr.flat(Infinity)
    }


  return (
    <div>
      <button onClick={() => console.log(flatten(nested))}>click </button> and view console
    </div>
  )
}
