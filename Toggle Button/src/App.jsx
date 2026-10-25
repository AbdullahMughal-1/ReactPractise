import React, { useState } from 'react'

const App = () => {
  const [isOn, setisOn] = useState(false)
  return (
    <button style={{width:"100px"}} onClick={()=>setisOn(!isOn)}>
      {isOn ? 'ON' : "OFF"}
    </button>
  )
}

export default App
