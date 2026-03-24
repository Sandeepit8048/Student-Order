import Express from 'express'
import connectDB from './Database/Db_connect.js'
import userschema from './modul/Cartdetail.js'

connectDB();

const app = Express();

const cartdetail = async ()=>{
    await userschema.create({
          image:'https://www.freepik.com/free-photos-vectors/bisket',
          prductdetail:"Made by India",
          quantityitem:"1",
          snackname:"Biskit",
          payableamount:" 10"

    },
    {
         image:'https://www.flipkart.com/veganic-dalmothh-namkeen-mixture-namkin-marwari-daalmoth-indian-snack/p/itm42205afaaecf6',
          prductdetail:"Made by India",
          quantityitem:"2",
          snackname:"Namkin",
          payableamount:" 10"
    },
    {    
         image:'https://ud-machine.com/blog/which-is-healthier-lays-or-kurkure/',
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