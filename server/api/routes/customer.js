import { Router } from 'express';
import bookings from '../controllers/bookings';
import validateBooking from '../../middlewares/validateBookings';
import availability from '../../middlewares/checkAvailability';
import authorization from '../../middlewares/authorization';
import validateComment from '../../middlewares/validateComment';


const customerRouter = Router();

customerRouter.post('/bookings', authorization, validateBooking.validateBooking,
    availability.checkAvailability,
    bookings.createBooking);

customerRouter.post('/comments', authorization, validateComment.validateBooking,
    bookings.createComment);

export default customerRouter;
