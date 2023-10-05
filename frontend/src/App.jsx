import React, { useState } from 'react'
import axios from 'axios'



 

import './App.css'

function App() {
  
const [first ,setfirst] = useState('')
const [last ,setlast] = useState('')
const [phone ,setphone] = useState('')
const [age ,setage] = useState('')
const [dob ,setdob] = useState('')
const[message,setmessage] =useState('')



const handlesubmit = (e)=> {
  e.preventDefault();

 axios.post("http://localhost:4000/use/new",{first,last,phone,age,dob,message})
 .then((response)=>{
console.log(response.data)
 })

 


}

  return (
    <>
     <form onSubmit={handlesubmit}>
<div className='heading'>
      <h1>
     Swiggy </h1>
     <p>order your favorate dish </p></div>


<div className='register'>

<h2>     Please register 
</h2>

</div>

  <div className='formlocation'>

        <input type="text" placeholder=' first Name' value={first} onChange={(event)=>{setfirst(event.target.value)}}  className='size' />

        
        <input type="text" placeholder=' last Name'  value={last} onChange={(event)=>{setlast(event.target.value)}} className='size'/>
      
<div>
<input type="number" placeholder=' phone number'  value={phone} onChange={(event)=>{setphone(event.target.value)}} className='size'/>

<input type="number" placeholder=' age'  value={age} onChange={(event)=>{setage(event.target.value)}} className='size' />

</div>

<div>


<input type="number" placeholder='dob'  value={dob} onChange={(event)=>{setdob(event.target.value)}}  className='size' />
<input type="text" placeholder='your message'  value={message} onChange={(event)=>{setmessage(event.target.value)}}  className='size' />

</div>
<div className='move'>
  <button className='Submit'>Register</button>
  <button className='Submit'>login</button>
</div>
</div>
     </form>
    </>
  )
}

export default App
