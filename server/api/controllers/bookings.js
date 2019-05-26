import models, { sequelize } from '../../db/models';


const bookings = {
    async createBooking(req, res) {
        const { bookedDate, userId, postId } = req.body;
        await models.Bookings.create(
            {
                bookedDate: req.body.bookedDate,
                userId: req.body.userId,
                postId: req.body.postId,
            },

        );
        return res.status(201).json({
            status: 201,
            message: 'Successfully booked',
            data: {
                bookedDate, userId, postId,
            },
        });
    },
    async bookingsPerPost(req, res) {
        const { postId } = req.params;
        await models.Bookings.findAll({
            where: {
                postId,
            },
        }).then((data) => {
            if (data.length > 0) {
                return res.status(200).json({
                    status: 200,
                    message: 'Bookings of this post',
                    data,
                });
            }

            return res.status(404).json({
                status: 404,
                message: 'No bookings found!',
            });
        });
    },
    async bookingsPerHeader(req, res) {
        const { header } = req.params;

        await models.Bookings.findAll({
            include: [
                {
                    model: models.Posts,
                    where: {
                        header,
                    },
                },

            ],

        }).then((data) => {
            if (data.length > 0) {
                return res.status(200).json({
                    status: 200,
                    message: `Bokkings of ${header}`,
                    data,
                });
            }
            return res.status(404).json({
                status: 404,
                message: 'No bookings found!',
            });
        });
    },

};

export default bookings;
