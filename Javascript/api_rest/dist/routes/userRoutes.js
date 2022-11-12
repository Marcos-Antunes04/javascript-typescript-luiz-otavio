"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// import express from 'express';
// const router = new express.Router();
var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// It's not common to exist in normal application
// router.get('/', userController.index); // list of all users
// router.get('/:id', userController.show); // list an user

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/:id', _loginRequired2.default, _UserController2.default.update);
router.delete('/:id', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/* CONTROLLER METHODS
index -> list all users (GET)
store/create -> create new user (POST)
delete -> delete an user (DELETE)
show -> show an user (GET)
update -> update an user (PATCH or PUT)
*/
