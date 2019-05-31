export default class validateBookings {
    static validateService(req, res, next) {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                message: 'The service name is required',
            });
        }
        next();
    }
}
