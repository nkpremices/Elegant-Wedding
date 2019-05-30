import express from 'express';
import controller from '../controllers/home';

// Declaring the app
const home = express();
const { Home } = controller;

home.get('', Home);

export default home;
