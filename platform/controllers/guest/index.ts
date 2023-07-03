import { Router } from 'express';
import { getGuestProfile } from './profile';
import { validateGuest } from '../../middlewares/validate';

const router: Router = Router();

router.get('/profile', validateGuest, getGuestProfile);

export default router;
