// import express from 'express';
// const router = new express.Router();
import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/* CONTROLLER METHODS
index -> list all users (GET)
store/create -> create new user (POST)
delete -> delete an user (DELETE)
show -> show an user (GET)
update -> update an user (PATCH or PUT)
*/
