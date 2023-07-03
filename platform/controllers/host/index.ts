import { Router } from 'express';
import { getHostProfile } from './profile';
import { getHostProperties } from './property';

const router: Router = Router();

router.get('/profile', getHostProfile);
router.get('/properties', getHostProperties);

export default router;
