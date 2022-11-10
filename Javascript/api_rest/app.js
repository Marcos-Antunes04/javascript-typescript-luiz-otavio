import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import studentRoutes from './src/routes/studentRoutes';
import photoRoutes from './src/routes/photoRoutes';

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
