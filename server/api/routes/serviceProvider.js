import { Router } from 'express';
import bookings from '../controllers/bookings';

const serviceProviderRouter = Router();

serviceProviderRouter.get('/bookings/:postId', bookings.bookingsPerPost);
serviceProviderRouter.get('/bookings/posts/:header',
    bookings.bookingsPerHeader);

export default serviceProviderRouter;
