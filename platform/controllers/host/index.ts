import { Router } from 'express';
import { getHostProfile } from './host';
import { validateHost } from '../../middlewares/validate';

const router: Router = Router();

router.get('/profile', validateHost, getHostProfile);

export default router;
