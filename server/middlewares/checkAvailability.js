import models, { sequelize } from '../db/models';

const availability = {
    async checkAvailability(req, res, next) {
        const { bookedDate, postId } = req.body;
        await models.Bookings.findAll({
            where: {
                bookedDate,
                postId,
            },
        }).then((data) => {
            if (data.length > 0) {
                return res.status(400).json({
                    status: 400,
                    message: 'This date has been already booked',
                });
            }
        });

        next();
    },
};

export default availability;
