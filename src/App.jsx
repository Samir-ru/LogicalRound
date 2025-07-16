import { useState } from 'react'
import './App.css'
import Task1 from './Tasks/EasyTasks/Task1'
import Task2 from './Tasks/EasyTasks/Task2'
import Task3 from './Tasks/EasyTasks/Task3'
import Task4 from './Tasks/EasyTasks/Task4'
import Task5 from './Tasks/EasyTasks/Task5'
import Task7 from './Tasks/Intermediate/Task7'
import Task8 from './Tasks/Intermediate/Task8'
import Task9 from './Tasks/Intermediate/Task9'
import DebugTask1 from './Tasks/DebuggingTask/DebugTask3and4'
import Task12 from './Tasks/Intermediate/Task12'
import { BrowserRouter as Router, Routes, Route} from 'react-router'
function App() {
  return (

<>
<section>
  Task 1: Reverse a string
  <Task1/>
</section>
<section>
Task 2: Find the Largest Number in an Array input array is  [1, 7, 9, 2, 5] 
  <Task2/>
</section>
<section>
  Task 3: Print Even Number from 1 to N
  <Task3/>
</section>
<section>
  Task 4: Task 4: Sum All Numbers in an Array
  <Task4/>
</section>
<section>
  Task 5: Basic useState example
  <Task5/>
</section>
<section>
  Task 7: Flatten a Nested Array
  <Task7/>
</section>
<section>
  Task 8: Check for Palindrome
<Task8/>
</section>
<section>
  Task 9: Character Frequency Counter
  <Task9/>
</section>
<section>
  Task12: Domain WhoIs with API
  <Task12/>
</section>
<section>
  Debug Solution for 3 and 4:
  <DebugTask1/>
</section>

some solutions are explained and answered in readme.md file please checkout <a href="https://github.com/Samir-ru/LogicalRound.git">Github repo</a>

</>
  )
}

export default App
