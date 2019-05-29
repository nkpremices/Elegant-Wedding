/* eslint-disable no-unused-vars */
/**
    * GET - / Gets the welcome message
    * @param {object} req - the request object
    * @param {object} res - the result object
*/

import models, { sequelize } from '../../db/models';
import generateHash from '../../helpers/generate.hash';
import sendError from '../../helpers/send.error';
import generateToken from '../../helpers/generate.token';


export default {
    signup: async (req, res) => {
        // Initialising variables
        const result = {};
        const status = 201;
        let tempUser;

        // getting the body of the request
        const {
            firstName,
            lastName,
            email,
            password,
            type,
            phone,
        } = req.body;


        try {
            // Hashing the password before storing it
            const hashedPass = await generateHash(password);

            tempUser = await models.Users.create({
                firstName,
                lastName,
                email,
                password: hashedPass,
                type,
                phone,
            });

            // Creating a token for the user
            const token = generateToken(tempUser.dataValues);
            // Sending the result

            result.status = status;
            result.message = 'User registered successfully';
            console.log(phone);

            result.data = {
                token,
                id: tempUser.dataValues.id,
                firstName: tempUser.dataValues.firstName,
                lastName: tempUser.dataValues.lastName,
                email: tempUser.dataValues.email,
            };
            res.status(status).json(result);
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                const emailErrMessage = 'Email already in use';
                sendError(205, result, res, emailErrMessage);
            } else sendError(400, result, res, error);
        }
    },
};
