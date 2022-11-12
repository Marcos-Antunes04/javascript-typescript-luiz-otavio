import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import studentRoutes from './routes/studentRoutes';
import photoRoutes from './routes/photoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // configuring the express
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes); // app use the route "homeRoutes"
    this.app.use('/users/', userRoutes); // app use the route "userRoutes"
    this.app.use('/tokens/', tokenRoutes); // app use the route "tokenRoutes"
    this.app.use('/students/', studentRoutes); // app use the route "studentRoutes"
    this.app.use('/photos/', photoRoutes); // app use the route "photoRoutes"
  }
}

export default new App().app;
