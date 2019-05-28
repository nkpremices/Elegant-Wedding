import { Router } from 'express';
import authController from '../controllers/auth';

const authRouter = Router();
const { signup } = authController;

authRouter.post('/signup', signup);

export default authRouter;
