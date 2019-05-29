import models, { sequelize } from '../../db/models';


const bookings = {
    async createBooking(req) {
        await models.Bookings.create(
            {
                bookedDate: req.body.bookedDate,
                userId: req.body.userId,
                postID: req.body.postID,
            },
        );
    },
};

export default bookings;
