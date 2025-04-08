import {addEvent} from "../models/Events.js"

export function testapi(req, res){
    addEvent({
        eventName:"ragam",
        start:Date.now(),
        end:new Date(Date.now()+2*60*1000)
    });
    res.status(200).send({"purpose": "testing"});
};

export function test(req,res){
    res.status(200).send(
        `<html>
        <head><title>Testing Map</title></head>
        <body>
            <h1>purpose:Testing </h1>
        </body>
        </html>`
    );
}