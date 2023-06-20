import { Router } from 'express';
import { getAllHosts, getHostProfile } from './host';

const router: Router = Router();

router.get("/profile", getHostProfile);
router.get("/all", getAllHosts);

export default router;