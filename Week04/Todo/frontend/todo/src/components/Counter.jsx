import React, { useState } from 'react'

function handlecount(event){
    setcnt(event.target.value);
    for (var i=0; i<cnt; i++){
        setUpCnt(upcnt+1)
    }
}

function handleclick(){
    setBut(but+1)
}

function Counter() {
    const [cnt,setCnt] = useState()
    const [upcnt,setUpCnt] = useState()
    const [but,setBut] = useState(0)
  return (
    <div>
    <input onChange={handlecount}></input>
    <div>Sum is {upcnt}</div>
    <button onClick={handleclick}>counter {but}</button>
    </div>
    
  )
}

export default Counter