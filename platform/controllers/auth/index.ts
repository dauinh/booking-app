import { Router } from 'express';
import { loginGuest, loginHost } from './login';
import { signupGuest, signupHost } from './signup'

const router: Router = Router();

router.post("/login/host", loginHost);
router.post("/login/guest", loginGuest);
router.post("/signup/host", signupHost);
router.post("/signup/guest", signupGuest);

export default router;