export default class validateBookings {
    static validateBooking(req, res, next) {
        const { bookedDate, postId } = req.body;
        if (!bookedDate) {
            return res.status(400).json({
                status: 400,
                message: 'The booked date is required',
            });
        } if (!postId) {
            return res.status(400).json({
                status: 400,
                message: 'The post Id is required',
            });
        }
        next();
    }
}
