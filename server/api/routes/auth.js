import { Router } from 'express';
import authController from '../controllers/auth';
import validateBody from '../../middlewares/validate.body';

const authRouter = Router();
const { signup, signin } = authController;

authRouter.post('/signup',
    validateBody(true, 'signup'),
    signup);

authRouter.post('/signin',
    validateBody(true, 'signin'),
    signin);

export default authRouter;
