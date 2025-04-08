import mongoose from "mongoose"

const eventSchema= new mongoose.Schema({
    eventName:{type:String, required:true, trim:true},  // trim for trimming empty spaces 
    poster: {type:String, required:false},
    start: {type:Date, required:true},
    end: {type:Date, required:true, index: { expires: 0 }, // index if for autodelete  
    }, 
    location: {type:Array, required:true},
})

const eventModel=mongoose.model("Event",eventSchema); //database collection is events

export const addEvent= async (event)=>{
    try {
        const e=new eventModel(event);
        const result= await e.save(); // does the job of eventModel.insertOne(e);
        console.log(result);
    } catch (error) {
        console.log("AddEvent Error!");
        console.log(error);
    }
}
