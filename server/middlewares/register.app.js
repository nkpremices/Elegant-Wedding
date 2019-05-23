/**
 * Resgister midllemware file
 * @name register
 */
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import environment from '../configs/environments';
/**
 * A function to register all the needed middlewares to the
 * app (express instance) every time the server is starting
 * @param {object} app - The express instance
 */
export default (app) => {
    app
    // Parse req object and make data available on req.body
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({ extended: true }))
        .use(cors()); // Allow cross origin requests

    if (process.env.NODE_ENV !== 'test' && environment !== 'production') {
    // Logging http requests
        app.use(logger('dev'));
    }
};
