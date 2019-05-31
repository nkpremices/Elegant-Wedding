import { Router } from 'express';
import customer from '../controllers/bookings';
import validateBooking from '../../middlewares/validateBookings';
import availability from '../../middlewares/checkAvailability';
import authorization from '../../middlewares/authorization';
import validateComment from '../../middlewares/validateComment';
import validateRating from '../../middlewares/validateRating';
import postId from '../../middlewares/validatePostId';


const customerRouter = Router();

customerRouter.post('/bookings', authorization, validateBooking.validateBooking,
    availability.checkAvailability,
    customer.createBooking);

customerRouter.post('/comments', authorization, validateComment.validateBooking,
    customer.createComment);

customerRouter.post('/posts/ratings', authorization,
    validateRating.validatePostRating, postId.checkPost, customer.createRating);

customerRouter.get('/posts',
    customer.filterResult);


export default customerRouter;
