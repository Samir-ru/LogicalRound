# Debug Solutions are mostly here
# Task 10 is answered here
Debug Task 1 : Variable hoisting with var
ans:
    the code in the question prints 
    "Hi"
    as "var" keyword is function scope variabe declarer not block scope variable declarer

Debug Task 2 : Object comparision
ans:
    The code will print 
    false

Debug Task 3 : Event Handler Issue
ans: 
        This is a run time error as the parrenthesis "()" in the  code instantly calls the function and the button only expects the name of the function so it should be:
         <button onClick ={handleClick}>Click</button>

### this is solved and demonstrated in DebugTask3and4.jsx

Debug Task4: State Update Issue
const [count, setCount] = useState(0);
function increment() {
  setCount(count++);
}

### this is solved and demonstrated in DebugTask3and4.jsx

the value will not be be updated as setCount is basically a function and passing its own argument will result in initial value
so the fix is 
    
    setCount((prev, current) => current = prev + 1)

Task 10:
The one form which is using "useRef" is the uncontrolled one because that need a reference to the element rather than directly assigining the value
export default function Task10() {
    const inputRef = useRef(null)
    const [input, setInput] = useState()
  return (
    <div>
      Uncontrolled component
      <input type="text" name="" id="" ref={inputRef}/>
      <button onClick={() => console.log(inputRef.current.value)}> Click </button> <br />
      input: {inputRef.current.value}
    Controlled Component  
    <input type="text" name="" id="" onChange={(e) => setInput(e.target.value)} /> 
    input: {input}
    </div>
  )
}





