import React from 'react'

export default function Task2() {
    const array = [1, 7, 9, 2, 5] 
    function largest(arr){
       return Math.max(...arr)
    }
  return (
    <div>
       the Largest number is: {largest(array)}
    </div>
  )
}
