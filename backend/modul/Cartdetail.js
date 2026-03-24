import mongoose from "mongoose";

const usermodule = new mongoose.Schema({
 
    prductdetail:String,
    quantityitem:Number,
    snackname:String,
    payableamount:Number


});

const userschema = mongoose.model("usermodule", usermodule)

export default userschema;