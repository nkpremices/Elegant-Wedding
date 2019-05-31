import { Router } from 'express';
import bookings from '../controllers/bookings';
import paymentController from '../controllers/payments';
import validateBody from '../../middlewares/validate.body';
import authorization from '../../middlewares/authorization';
import authenticateUser from '../../middlewares/validate.auth.routes';

const serviceProviderRouter = Router();

serviceProviderRouter.get('/bookings/:postId', bookings.bookingsPerPost);
serviceProviderRouter.get('/bookings/posts/:header',
    bookings.bookingsPerHeader);

serviceProviderRouter.post('/payment',
    authorization,
    authenticateUser.authoriseUser('provider'),
    validateBody(true, 'payment'),
    paymentController.imputPaymentInfo);

export default serviceProviderRouter;
