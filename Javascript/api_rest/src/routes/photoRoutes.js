// import express from 'express';
// const router = new express.Router();
import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import photoController from '../controllers/PhotoController';

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
