import jwt from 'jsonwebtoken';
import environment from '../configs/environments';

/**
 * A fucntion to generate jwt tokens
 *
 * @param {object} tempUser - The user whose credentials have
 * to be used to generate the token
 * @returns {String} token - The generated token
 */
const createToken = (tempUser) => {
    const playLoad = {
        id: tempUser.id,
        firstName: tempUser.firstName,
        lastName: tempUser.lastName,
        email: tempUser.email,
        type: tempUser.type,
        phone: tempUser.phone,
    };
    const options = {
        expiresIn: '1d',
    };
    const token = jwt.sign(playLoad, environment.jwtKey, options);
    return token;
};

export default createToken;
