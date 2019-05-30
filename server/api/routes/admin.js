import { Router } from 'express';
import adminController from '../controllers/admin';
import authorization from '../../middlewares/authorization';
import service from '../../middlewares/validateService';
import authenticateUser from '../../middlewares/validate.auth.routes';
import validateBody from '../../middlewares/validate.body';

const adminRouter = Router();

adminRouter.post('/services',
    authorization,
    service.validateService,
    adminController.createService);

adminRouter.post('/packages',
    authorization,
    authenticateUser.authoriseUser('admin'),
    validateBody(true, 'createPackage'),
    adminController.createPackage);

export default adminRouter;
