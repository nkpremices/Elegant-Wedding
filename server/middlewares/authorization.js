import jwt from 'jsonwebtoken';

const payload = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader === 'undefined') {
        return res.status(401).json({
            status: 401,
            error: 'A token must be provided!',
        });
    }
    const bearerToken = bearerHeader.split(' ');
    const token = bearerToken[1];
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                status: 401,
                error: 'A token must be provided!',
            });
        }
        req.user = decoded;
        next();
    });
};
export default payload;
