import { Router } from 'express';
import login from './login';

const router: Router = Router();

router.post("/", login);

export default router;