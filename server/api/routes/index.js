import express from 'express';
import authRouter from './auth';
import customerRouter from './customer';
import serviceProviderRouter from './serviceProvider';


const router = express();


router.use('/auth', authRouter);
router.use('/customers', customerRouter);
router.use('/providers', serviceProviderRouter);

export default router;
