export default class validateBookings {
    static validatePostRating(req, res, next) {
        const validRate = /[1-5]/;
        const { rate, postId } = req.body;
        if (!rate) {
            return res.status(400).json({
                message: 'The rate is required',
            });
        }
        if (!validRate.test(rate)) {
            return res.status(400).json({
                message: 'The rate has to be between 1 and 5!',
            });
        }
        if (!postId) {
            return res.status(400).json({
                message: 'The post Id is required',
            });
        }
        next();
    }
}
