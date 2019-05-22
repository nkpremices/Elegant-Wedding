import '@babel/polyfill';
import express from 'express';
import registerMiddleware from './middlewares/register.app';
import router from './api/routes/index';
import environement from './configs/environments';

const app = express({ strict: true });

// Register middleware
registerMiddleware(app);

// App for v1
app.use('/api', router);

app.listen(environement.app.port, () => {
    // eslint-disable-next-line
    console.log(`Server now listening at localhost:${environement.app.port}`);
});

export default app;
