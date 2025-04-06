import { Router } from 'express';
import { test, testapi} from '../Controllers/testcontroller.controller.js';

const router = Router();

router.get('/', testapi);

router.use((req,res)=>{
    res.status(404).send("404 not found");
})

export default router;
