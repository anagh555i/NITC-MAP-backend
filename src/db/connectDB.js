import mongoose from "mongoose"

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const connectDB=async (DB_URL)=>{
    try {
        const res=await mongoose.connect(DB_URL, clientOptions);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
}

// export default connectDB;