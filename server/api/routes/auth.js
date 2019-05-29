import { Router } from 'express';
import authController from '../controllers/auth';
import validateBody from '../../middlewares/validate.body';

const authRouter = Router();
const { signup } = authController;

authRouter.post('/signup',
    validateBody(true, 'signup'),
    signup);

export default authRouter;
