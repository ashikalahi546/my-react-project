import React, { useEffect, useState } from 'react'

export default function Count() {
    const [count,setCount] = useState(0)

  return (
    <div>
    <h3>Counter : {count} </h3>
      <button onClick={()=>setCount(count+1)}>add</button>
      <button onClick={()=> setCount(count -1 )}>remove</button>
    </div>
  )
}
