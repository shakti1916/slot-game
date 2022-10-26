import React from 'react'
import SlotM from './SlotMachine'



const App =()=>{
  return(

    <>
      <h1 className='heading-style'> 🎰
Welcome to {""} <span style={{fontWeight:'bold'}}>Slot Machine game </span> 🎰

  </h1>
  <div className='slotmachine'>
  <SlotM x='😄' y="😄" z = "😄"/>
  
  <SlotM x =" 😄" y =" 😠" z ="😄"/>
  <SlotM x = " 🍓" y = '🍌' z = ' 🍓'/>
  <SlotM x = " 👍" y = ' 👎' z = ' 👍'/>

  </div>
  

    </>
  )
  
  
  


  
}
export default App