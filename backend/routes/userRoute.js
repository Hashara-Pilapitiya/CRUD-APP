const express = require('express');

const { create } = require('../controller/userController.js');
const { getAll } = require('../controller/userController.js');
const { getById } = require('../controller/userController.js');
const { update } = require('../controller/userController.js');

//import { create } from "../controller/userController.js";

const route = express.Router();

route.post('/user', create);
route.get('/users', getAll);
route.get('/user/:id', getById);
route.put('/update/user/:id', update);

module.exports = route;
