import React, { useState } from 'react'

function App() {


  const [item,SetItem] = useState(["Tannu","Mannu","Salmu"])
  return (
    
      <>
      <div>
        {item.map((item,index) => {
          return (
            <>
            <h1  key={index}>{item + "achi hai"}</h1>            
            <button>like kar do der saare pyar se</button>
            </>
            

            
          )
        })}


      </div>

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      </>
      
    
  )
}

export default App
