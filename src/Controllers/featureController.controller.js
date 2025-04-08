import {addFeature,getAllFeatures} from "../models/Features.js"

export function addFeatureApi(req, res){
    const {featureName,location}=req.body;
    addFeature({
        featureName:`${featureName}`,
        location:`${location}`
    });
    res.status(200).send({"purpose": "feature addition"});
};

export async function getAllFeaturesApi(req, res){
    const result=await getAllFeatures();
    // console.log(result);
    res.status(200).json(result);
};