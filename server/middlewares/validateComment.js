export default class validateBookings {
    static validateBooking(req, res, next) {
        const { message, postId } = req.body;
        if (!message) {
            return res.status(400).json({
                status: 400,
                message: 'You have to add a comment',
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
