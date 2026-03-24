import Express from 'express'
import cors from "cors";
import connectDB from './Database/Db_connect.js'
import userschema from './modul/Cartdetail.js'

connectDB();
const app = Express();

app.use(cors());

app.use(Express.json());

app.get('/student', async (req, res)=>{
      try{
        const item = await userschema.find();
        res.json(item);
      }
      catch(error){
        console.log("Error fetch item", error);
        res.status(505).send("server Error");
      }
})


app.listen(3000, ()=>{
    console.log("server run port number 3000");
})