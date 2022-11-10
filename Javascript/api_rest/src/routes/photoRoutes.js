// import express from 'express';
// const router = new express.Router();
import { Router } from 'express';

import photoController from '../controllers/PhotoController';

const router = new Router();

router.post('/', photoController.store);

export default router;
