import { Router } from 'express';
import { addFeatureApi,getAllFeaturesApi} from '../Controllers/featureController.controller.js';

const router = Router();

router.post('/add', addFeatureApi);
router.get('/getLocations',getAllFeaturesApi);

router.use((req,res)=>{
    res.status(404).send("404 not found");
})

export default router;
