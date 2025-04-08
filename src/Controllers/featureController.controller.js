import {addFeature} from "../models/Features.js"

export function addFeatureApi(req, res){
    const {featureName,location}=req.body;
    addFeature({
        featureName:`${featureName}`,
        location:`${location}`
    });
    res.status(200).send({"purpose": "feature addition"});
};
