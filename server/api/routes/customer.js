import { Router } from 'express';
import bookings from '../controllers/bookings';
import validateBooking from '../../middlewares/validateBookings';
import availability from '../../middlewares/checkAvailability';


const customerRouter = Router();

customerRouter.post('/bookings', availability.checkAvailability,
    validateBooking.validateBooking,
    bookings.createBooking);

export default customerRouter;
