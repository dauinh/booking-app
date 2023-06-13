import { Router } from 'express';
import getAllHosts from './host';

const router: Router = Router();

router.get("/", getAllHosts);
router.post("/");

export default router;