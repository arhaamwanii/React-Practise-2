import { useState , useCallback } from 'react'
import './App.css'

function App() {
 
  const [length , setLength] = useState(8);
  const [numberALlowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);

  const [password , setPassword] = useState("");


  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCKDEFGHIJKLMNOUPQRSTUVWXYabcdefghijklmnouprstuvqxyz"

    if (numberALlowed) str += "0123456789"
    if (charAllowed) str += "@-_}{+=#$%&*()"


  } , [length, numberALlowed , charAllowed , setPassword] )


  return (
    <>
    <h1>{length}</h1>
    </>
  )
}

export default App 


///arham amin wani
//1
//2
//3
//4
//5
//6
//7
//8
//8 




