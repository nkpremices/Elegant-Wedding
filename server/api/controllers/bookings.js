import models, { sequelize } from '../../db/models';


const bookings = {
    async createBooking(req, res) {
        const { bookedDate, postId } = req.body;
        const { id } = req.user;
        await models.Bookings.create({
            bookedDate,
            userId: id,
            postId,
        });
        return res.status(201).json({
            message: 'Successfully booked',
            data: {
                bookedDate,
                id,
                postId,
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
                    message: 'Bookings of this post',
                    data,
                });
            }

            return res.status(404).json({
                message: 'No bookings found!',
            });
        });
    },
    async bookingsPerHeader(req, res) {
        const { header } = req.params;

        await models.Bookings.findAll({
            attributes: [
                'id',
                'bookedDate',
                'createdAt',
                'updatedAt',
                'userId',
                'postId',
            ],
            include: [
                {
                    model: models.Posts,
                    attributes: [],
                    where: {
                        header,
                    },
                },
            ],
        }).then((data) => {
            if (data.length > 0) {
                return res.status(200).json({
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
    async createComment(req, res) {
        const { message, postId } = req.body;
        const { id, firstName, lastName } = req.user;
        await models.Comments.create({
            message,
            userId: id,
            postId,
        });
        const comment = message;
        return res.status(201).json({
            message: 'Thank you for contributing to this post!',
            data: {
                firstName,
                lastName,
                comment,
            },
        });
    },
    async createRating(req, res) {
        const { rate, postId } = req.body;
        const { id, firstName, lastName } = req.user;
        await models.PostRatings.create({
            rate,
            userId: id,
            postId,
        });
        return res.status(201).json({
            message: 'Thank you for rating this post!',
            data: {
                postId,
                rate,
                firstName,
                lastName,
            },
        });
    },
};

export default bookings;
