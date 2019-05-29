export default class validateBookings {
    static validateBooking(req, res, next) {
        if (!req.body.bookedDate) {
            return res.status(400).json({
                status: 400,
                message: 'The booked date is required',
            });
        } if (!req.body.userId) {
            return res.status(400).json({
                status: 400,
                message: 'The user Id is required',
            });
        } if (!req.body.postId) {
            return res.status(400).json({
                status: 400,
                message: 'The post Id is required',
            });
        }
        next();
    }
}
