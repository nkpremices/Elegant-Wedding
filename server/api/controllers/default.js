/**
    * The default controller to respond to all unknown endpoints
    * @param {object} req - the request object
    * @param {object} res - the result object
*/
export default (req, res) => {
    const status = 404;
    const result = {
        status,
        error: {
            message: 'The requested endpoint doesn\'t exist',
        },
    };
    res.status(status).json(result);
};
