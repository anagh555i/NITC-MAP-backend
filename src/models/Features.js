import mongoose from "mongoose"

const featureSchema= new mongoose.Schema({
    featureName:{type:String, required:true, trim:true},  // trim for trimming empty spaces
    location: {type:Array, required:true},
})

const featureModel=mongoose.model("Feature",featureSchema); //database collection is features

export const addFeature= async (feature)=>{
    try {
        const f=new featureModel(feature);
        const result= await f.save(); // does the job of featureModel.insertOne(f);
        console.log(result);
    } catch (error) {
        console.log("AddFeature Error!");
        console.log(error);
    }
}