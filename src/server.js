import express from 'express';
import dotenv from 'dotenv';
import testroute from "./Routes/testroute.router.js"
import featureRoute from "./Routes/featureRoute.router.js"
import {connectDB} from './db/connectDB.js'

const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT ;
const DB_URL= process.env.DATABASE_URL ;

connectDB(DB_URL);

app.listen(PORT,()=>{
    console.log("Listening from port:"+PORT);
});

app.use('/api/test', testroute);
app.use('api/feature/',featureRoute);

app.use((req,res)=>{
    res.status(404).send("404 not found");
});

