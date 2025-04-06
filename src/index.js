import express from 'express';
import dotenv from 'dotenv';
import testroute from "./Routes/testroute.router.js"

const app = express();

dotenv.config();
app.use(express.json());


const PORT = process.env.PORT ;
app.listen(PORT,()=>{
    console.log("Listening from port:"+PORT);
});

app.use('/api/test', testroute);

app.use((req,res)=>{
    res.status(404).send("404 not found");
});
