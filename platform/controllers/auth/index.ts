import { Router } from 'express';
import { login } from './login';
import { signup } from './signup'

const router: Router = Router();

router.post("/", login);
router.post("/", signup);

export default router;