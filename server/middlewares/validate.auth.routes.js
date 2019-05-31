/* eslint-disable no-unused-vars */
import models, { sequelize } from '../db/models';
import generateHash from '../helpers/generate.hash';
import sendError from '../helpers/send.error';
import decodeJwt from '../helpers/decode.token';

const authoriseUser = (userType) => {
    // initializing variables
    const errorMessage = 'Unauthorized action';

    return (req, res, next) => {
        if (req.user.type === userType) {
            next();
        } else sendError(403, {}, res, errorMessage);
    };
};

export default {
    authoriseUser,
};
