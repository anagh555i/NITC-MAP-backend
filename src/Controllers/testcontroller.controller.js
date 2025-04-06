export function testapi(req, res){
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