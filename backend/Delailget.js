import Express from 'express'
import connectDB from './Database/Db_connect.js'
import userschema from './modul/Cartdetail.js'

connectDB();

const app = Express();

const cartdetail = async ()=>{
    await userschema.create({
          prductdetail:"Made by India",
          quantityitem:"1",
          snackname:"Biskit",
          payableamount:" 10"
    },
    {
          prductdetail:"Made by India",
          quantityitem:"2",
          snackname:"Namkin",
          payableamount:" 10"
    },
    {
          prductdetail:"Made by India",
          quantityitem:"1",
          snackname:"Kur-kure",
          payableamount:"20"
    }

)
}

cartdetail();

app.listen(2000, ()=>{
    console.log("server run port number 2000")
})