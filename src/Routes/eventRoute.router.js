import { Router } from 'express';
import { addEventApi, getAllEventsApi} from '../Controllers/eventController.controller.js';

const router = Router();

router.post('/add', addEventApi);
router.get('/getAllEvents', getAllEventsApi);

router.use((req,res)=>{
    res.status(404).send("404 not found");
})

export default router;
