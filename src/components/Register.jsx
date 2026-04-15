
import React, {useState} from 'react'

export default function Register() {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("") 


  return (
    <div className='container'>
    <div className='row'>
        <form className='col-12 col-md-6'>
            <div className='mb-3'>            
      <h1>Register </h1>
    </div>
      <div className="mb-3">
        <label htmlFor="" class="form-label">Name</label>
        <input type="text" class="form-control"/>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
  )
}
