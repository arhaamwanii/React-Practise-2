import { useState , useCallback ,   useEffect , useRef} from 'react'

function App() {
 
  const [length , setLength] = useState(8);
  const [numberALlowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);

  const [password , setPassword] = useState("");
  //we define variables for there specific use cases 
  

  //use ref

  const passwordRef = useRef(null)


  //we careated a use ref with initail value of nothing --- and  used it later on to ref to the input we get back from random text generator
  
  

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCKDEFGHIJKLMNOUPQRSTUVWXYabcdefghijklmnouprstuvqxyz"
    //straight up defining the variables and storing the value we want to pick randomply out of

    if (numberALlowed) str += "0123456789"
    if (charAllowed) str += "@-_}{+=#$%&*()"
    //creating a command which if the argument in it is  true, adds the things in it to the actaully vairbale out of whcih we are choosing actaully


    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1 )
      //this picks up value form  a math.random(DECIAML VALUE) --- then we multiply thay with the length of the string which means it will give us a number between one and what ever is the length of the string --- we add one to it to make sure we are includng the last value  ---- the we floor this given number from a decial to actial numebr -- Math.Floor because we are rounding the number down(adding one also help here)

      //from the length which is determined  in the length variable we pic up a 

      pass = pass + str.charAt(char)
      //we get the value from the ste and using the random value we generated we specify which value to put in this pass keyword --- look of this legth makes sure that the cycle of adding a random number to the pass is run only the number of times it has been soecified in the length vairables whoes value we actively change via other function 
   
   
    }



setPassword(pass)

  } , [length, numberALlowed , charAllowed , setPassword] )




useEffect(() =>{passwordGenerator()
  
  } , [length, numberALlowed , charAllowed , passwordGenerator])





const copypasswordToClipboard = useCallback(() =>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0 ,8)
  window.navigator.clipboard.writeText(password)
} ,  [password  ] )




  return (
    <>
    <h1>{length}</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 bg-gray-700 '>
      <h1>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>

        <input  type="text" 
        value={password}
        className='outline-none w-full py-1 px-3 m-4 rounded-lg'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copypasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        Copy
        </button>

      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={20}
            value={length} 
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            
            />
            <label> Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>

            <input type="checkbox" 
              defaultChecked={numberALlowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
              <input type="checkbox" 
                defaultChecked={numberALlowed}
                id='numberInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
              />
              <label htmlFor="numberInput">Charecters</label>
            </div>
      </div>
    </div>



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




