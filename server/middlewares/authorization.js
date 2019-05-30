import decodeJwt from '../helpers/decode.token';

const payload = (req, res, next) => {
    // initializing variables
    const bearerHeader = req.headers.authorization;

    if (typeof bearerHeader === 'undefined') {
        return res.status(401).json({
            status: 401,
            error: 'A token must be provided!',
        });
    }

    const token = bearerHeader.split(' ')[1];
    const tempUser = decodeJwt(token);

    if (tempUser) {
        req.user = tempUser;
        next();
    } else {
        return res.status(401).json({
            status: 401,
            error: 'Invalid token provided!',
        });
    }
    return true;
};
export default payload;
