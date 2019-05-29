import { Router } from 'express';
import admin from '../controllers/admin';
import authorization from '../../middlewares/authorization';
import service from '../../middlewares/validateService';

const adminRouter = Router();

adminRouter.post('/services', authorization, service.validateService,
    admin.createService);


export default adminRouter;
