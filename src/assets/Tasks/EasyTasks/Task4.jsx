import React from 'react'

export default function Task4() {
    const arr = [1, 5, 9]

    function sumArray(array) {
        const sum = array.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sum;
    }
  return (
    <div>
      {sumArray(arr)}
    </div>
  )
}
