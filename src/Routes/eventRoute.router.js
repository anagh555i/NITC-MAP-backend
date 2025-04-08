import { Router } from 'express';
import { addEventApi} from '../Controllers/eventController.controller.js';

const router = Router();

router.post('/add', addEventApi);

router.use((req,res)=>{
    res.status(404).send("404 not found");
})

export default router;
