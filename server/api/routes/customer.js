import { Router } from 'express';
import bookings from '../controllers/bookings';

const customerRouter = Router();

customerRouter.post('/bookings', bookings.createBooking);

export default customerRouter;
