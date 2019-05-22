/**
    * GET - / Gets the welcome message
    * @param {object} req - the request object
    * @param {object} res - the result object
*/
export default {
    signup: (req, res) => {
        const status = 200;
        const result = {
            status,
            data: {
                message: 'Welcome on Banka',
            },
        };
        res.status(status).json(result);
    },
};
