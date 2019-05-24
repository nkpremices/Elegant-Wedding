import express from 'express';
import authRouter from './auth';
import customerRouter from './customer';


const router = express();


router.use('/auth', authRouter);
router.use('/customers', customerRouter);

export default router;
