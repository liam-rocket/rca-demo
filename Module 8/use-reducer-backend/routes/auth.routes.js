/* eslint-disable import/extensions */
import { Router } from 'express';

import AuthController from '../controllers/auth.controller.js';

const router = Router();

const authController = new AuthController();

router.post('/sign-in', authController.signIn);
router.get('/re-auth', authController.reAuth);
router.get('/verify-sign-in', authController.verifySignIn);
router.get('/sign-out', authController.signOut);

export default router;
