import { Router } from 'express';
import bookings from '../controllers/bookings';
import validateBooking from '../../middlewares/validateBookings';
import availability from '../../middlewares/checkAvailability';
import authorization from '../../middlewares/authorization';


const customerRouter = Router();

customerRouter.post('/bookings', authorization, availability.checkAvailability,
    validateBooking.validateBooking,
    bookings.createBooking);

export default customerRouter;
