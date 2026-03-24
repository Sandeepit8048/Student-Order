import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://rkysandeepyadav_db_user:b7bNl9c2nWR5JvNN@cluster0.vxrahge.mongodb.net/');
        console.log("mongoDB is conntected successfully");
    }
    catch (error) {
        console.log('data not found', error)
    }
}

export default connectDB 