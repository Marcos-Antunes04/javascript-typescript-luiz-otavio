// import express from 'express';
// const router = new express.Router();
import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
