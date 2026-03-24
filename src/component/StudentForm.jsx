import React, { useState } from 'react'

function StudentForm() {
    const [form , setForm]= useState({
        user:'',
        email:'',
        phone:'',
        id:''
    })

    function handleChange(e){
        const [name,value]= e.target.value

        setForm({
            ...form, 
             name:e.target.value
        })
    }

    console.log(form);

      

  return (
    <div>
        <h1>Form</h1>
        <form action="" >
            <label htmlFor="">User-Name</label>
            <input type="text" placeholder='user-name' id='' name='user' onChange={handleChange}  />
             <label htmlFor="">E-mail</label>
             <input type="email" name="email" id="" placeholder='xyz@gmail.com' onChange={handleChange} />
             <label htmlFor="">Phone-Num</label>
             <input type="number" name="phone" id="" placeholder='+91-9572720939' onChange={handleChange} />
             <label htmlFor="">College-Id</label>
             <input type="number" name="id" id="" placeholder='A2026it8048' onChange={handleChange} />
             <button type='subit' >Submit</button>
        </form>


    </div>
  )
}

export default StudentForm