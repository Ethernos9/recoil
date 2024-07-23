import React from 'react'
import Myatom, { evenSelector } from './store/atoms/Atom'
import { selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'


const App = () => {
  return (
    <div>
      <Count/>
      <UpdateCounter/>
      <SelectorUsed/>
    </div>
  )
}
const Count = ()=>{
  console.log("re-rendering")

  return (
    <div>
      <Counter/>
    
    </div>
  )
}
const Counter = ()=>{
  const count = useRecoilValue(Myatom)
  return (
    <div>
      {count}
    </div>
  )
}

const UpdateCounter = ()=>{
  // const [count,setCount]  = useRecoilState(Myatom)
  const setCount = useSetRecoilState(Myatom)
 
  return (
    <div>
        <button onClick={()=>setCount(count => count+1)}>Incre</button>
        <button onClick={()=>setCount(count=>count-1)}>Decre</button>
    </div>
  )

}

const SelectorUsed = ()=>{
  const isEven = useRecoilValue(evenSelector)

    return( 
      <div>
               count is {isEven=== 0 ? 'even' : 'odd'}

      </div>

    )
}

export default App