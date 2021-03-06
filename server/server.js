import '@babel/polyfill';
import express from 'express';
import path from 'path';
import registerMiddleware from './middlewares/register.app';
import router from './api/routes/index';
import environement from './configs/environments';

// eslint-disable-next-line no-unused-vars
import models, { sequelize } from './db/models/index';
import defaultErrorController from './api/controllers/default';
import home from './api/routes/home';

const app = express({ strict: true });
const syncDbOnStart = environement.name === 'test';

// Register middleware
registerMiddleware(app);

// App for v1
app.use('/api', router);

app.use('/', home);

// default error messages
app.get('*', defaultErrorController);
app.post('*', defaultErrorController);
app.delete('*', defaultErrorController);
app.patch('*', defaultErrorController);

// Set a static folder
app.use(express.static(path.join(__dirname, '../UI')));

sequelize.sync({ force: syncDbOnStart }).then(() => {
    app.listen(environement.app.port, () => {
        // eslint-disable-next-line
        console.log(`Server now listening on port ${environement.app.port} in ${environement.name} mode!`);
    });
});

export default app;
