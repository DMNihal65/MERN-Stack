import React, { useEffect, useMemo, useState } from 'react'



function Counter() {
    const [cnt,setCnt] = useState(1)
    const [upcnt,setUpCnt] = useState(0)
    const [but,setBut] = useState(0)

    let count = useMemo(()=>{
      console.log("memo called")
      let count1=0
      for(let i=0;i<=cnt;i++){
        count1 = count1+ i
      }
      return count1

    },[cnt])
  
  function handleclick(){
      setBut(but+1)
  }


  return (
    <div>
    <input onChange={(e)=>{setCnt(e.target.value)}}></input>
    <div>Sum is {count}</div>
    <button onClick={handleclick}>counter {but}</button>
    </div>
    
  )
}

export default Counter