import jwt from 'jsonwebtoken';
import environment from '../configs/environments';

/**
 * A function to decode the token
 *
 * @param {string} token - the token to decode
 * @returns {object} retObj - The object that contains
 * decoded playloads
 */
const decodeJwt = (token) => {
    let retObj;
    jwt.verify(token, environment.jwtKey, (err, decodedObj) => {
        if (!err) retObj = decodedObj;
    });
    return retObj;
};

export default decodeJwt;
