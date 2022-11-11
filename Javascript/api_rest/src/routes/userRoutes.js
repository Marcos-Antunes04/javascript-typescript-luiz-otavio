// import express from 'express';
// const router = new express.Router();
import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// It's not common to exist in normal application
// router.get('/', userController.index); // list of all users
// router.get('/:id', userController.show); // list an user

router.post('/', loginRequired, userController.store);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/* CONTROLLER METHODS
index -> list all users (GET)
store/create -> create new user (POST)
delete -> delete an user (DELETE)
show -> show an user (GET)
update -> update an user (PATCH or PUT)
*/
