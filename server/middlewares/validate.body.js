/* eslint-disable no-unused-expressions */
/**
 * Schemas description file
 * @name validationMiddleware
 */
/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import Joi from 'joi';
import Schemas from '../helpers/validations.schemas';
import sendError from '../helpers/send.error';

/**
 * A function to save an account when requested by the controller
 * @param {boolean} [useJoiError=false] - indicates that Joi
 * validation errors should be used
 * @param {object} schema - The validation schema comming from
 * the helper @ref validationSchemas
 */

// Initializing variables
// Allowed http methods
const _supportedMethods = ['get', 'post', 'patch', 'delete'];

// Joi validation options
const _validationOptions = {
    abortEarly: false, // abort after the last validation error
    allowUnknown: true, // allow unknown keys that will be ignored
    stripUnknown: true, // remove unknown keys from the validated data
};

// Validation error messages build
const passwordFieldError = 'Password must be at least 5 letters containing'
+ ' at least a number a Lowercase letter and an Uppercase letter';

const nameFieldErrorMessage = ' name can not contain '
+ 'spaces or numbers and must be at least 3 characters';

const emailFieldErrorMessage = 'Invalid email provided';

const phoneFieldErrorMessage = 'Invalid phone number provided';

const periodFieldErrorMessage = 'Invalid period provided. '
    + 'Period must have the format: 8m, 1y, etc';

const customiseMessage = (Message) => {
    let message = Message;
    if (message.includes('password with value')) {
        message = passwordFieldError;
    }
    if (message
        .includes('firstName with value')) {
        message = `First${nameFieldErrorMessage}`;
    }
    if (message
        .includes('lastName with value')) {
        message = `Last${nameFieldErrorMessage}`;
    }
    if (message
        .includes('email with value')) {
        message = emailFieldErrorMessage;
    }
    if (message.includes('phone with value')) {
        message = phoneFieldErrorMessage;
    }
    if (message.includes('period with value')) {
        message = periodFieldErrorMessage;
    }
    return message;
};


export default (useJoiError = false, schema) => {
    const _useJoiError = _.isBoolean(useJoiError) && useJoiError;

    // validation middleware
    /**
     * A function to validate schemas
     * @param {object} req - the request object
     * @param {object} res - the result object
     * @param {function} next - callBack function
    */
    // eslint-disable-next-line consistent-return
    return (req, res, next) => {
        const method = req.method.toLowerCase();

        if (_.includes(_supportedMethods, method)
        && _.has(Schemas, schema)
        && _.get(Schemas, schema)) {
        // get the schema for the route
            const _schema = _.get(Schemas, schema);

            // Validation happens here
            return Joi
                .validate(req
                    .body, _schema, _validationOptions, (err, data) => {
                    if (!err) {
                        req.body = data;
                        next();
                    } else {
                        // Building the error object
                        let message = err.details[0].message
                            .replace(/['"]/g, '');

                        message = customiseMessage(message);
                        // Default error
                        const defaultErr = 'Invalid request data. Try again';

                        _useJoiError
                            ? sendError(400, {}, res, message)
                            : sendError(400, {}, res, defaultErr);
                    }
                });
        }

        next();
    };
};
