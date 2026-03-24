import React, { useState } from 'react'

function StudentForm() {
    const [form, setForm] = useState({
        user: '',
        email: '',
        phone: '',
        id: ''
    })

    function handleChange(e) {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        setForm({
            user: '',
            email: '',
            phone: '',
            id: ''
        })
    }


    console.log(form);



    return (
        <div>
            <h1>Form</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">User-Name</label>
                <input type="text" placeholder='user-name' id='' name='user' onChange={handleChange} value={form.user} />
                <label htmlFor="">E-mail</label>
                <input type="email" name="email" id="" placeholder='xyz@gmail.com' onChange={handleChange} value={form.email} />
                <label htmlFor="">Phone-Num</label>
                <input type="number" name="phone" id="" placeholder='+91-9572720939' onChange={handleChange} value={form.phone} />
                <label htmlFor="">College-Id</label>
                <input type="number" name="id" id="" placeholder='A2026it8048' onChange={handleChange} value={form.id} />
                <button type='subit' >Submit</button>
            </form>


        </div>
    )
}

export default StudentForm