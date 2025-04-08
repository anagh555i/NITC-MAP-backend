import { Router } from 'express';
import { addFeatureApi} from '../Controllers/featureController.controller.js';

const router = Router();

router.post('/add', addFeatureApi);

router.use((req,res)=>{
    res.status(404).send("404 not found");
})

export default router;
