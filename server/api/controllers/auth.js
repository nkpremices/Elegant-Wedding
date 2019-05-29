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
import comparePasswords from '../../helpers/compare.passwords';


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
                const message = 'Email already in use';
                sendError(205, result, res, message);
            } else sendError(400, result, res, error);
        }
    },

    signin: async (req, res) => {
        // Initialising variables
        const result = {};
        const status = 200;
        let tempUser;

        try {
            tempUser = await models.Users.findAll({
                where: {
                    email: req.body.email,
                },
            });

            const verify = await comparePasswords(tempUser[0].dataValues, req.body.password);

            if (verify) {
            // Sending the result

                result.status = status;
                result.message = 'User logged in successfully';

                // Creating a token for the user
                const token = generateToken(tempUser[0].dataValues);

                result.data = {
                    token,
                };
                res.status(status).json(result);
            } else {
                const err = 'Invalid password';
                sendError(404, result, res, err);
            }
        } catch (error) {
            if (tempUser.length === 0) {
                const mess = 'A user with the provided email doesn\'t exit';
                sendError(404, result, res, mess);
            } else sendError(400, result, res, error);
        }
    },
};
