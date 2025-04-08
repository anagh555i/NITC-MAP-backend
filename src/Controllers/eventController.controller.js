import {addEvent} from "../models/Events.js"

export function addEventApi(req, res){
    const {eventName,poster,startTime,endTime,location}=req.body;
    addEvent({
        eventName:`${eventName}`,
        poster:`${poster||null}`,
        start:`${startTime}`,
        end:`${endTime}`,
        location:`${location}`
    });
    res.status(200).send({"purpose": "event addition"});
};
