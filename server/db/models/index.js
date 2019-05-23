import Sequelize from 'sequelize';
import environment from '../../configs/environments';

const sequelize = new Sequelize(environment.database.url);

const models = {
    Users: sequelize.import('./users'),
    Posts: sequelize.import('./posts'),
    Bookings: sequelize.import('./bookings'),
    Comments: sequelize.import('./comments'),
    Packages: sequelize.import('./packages'),
    PaymentInfo: sequelize.import('./paymentInfo'),
    PostRatings: sequelize.import('./postRatings'),
    Services: sequelize.import('./services'),
    Subscriptions: sequelize.import('./subscriptions'),
};

Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize };

export default models;
