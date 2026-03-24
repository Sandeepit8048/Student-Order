import React, { useState } from 'react'

function SnacksPage() {

  const [cart, setCart]= useState([
    localStorage.setItem({
      Product:'Biscit',
      price:'$ 15'
      
    })||[]
  ])


  return (
    <>
     <h1>Hello</h1>

     


    </>
  )
}

export default SnacksPage