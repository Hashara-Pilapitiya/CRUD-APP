const express = require('express');

const { create } = require('../controller/userController.js');
const { getAll } = require('../controller/userController.js');

//import { create } from "../controller/userController.js";

const route = express.Router();

route.post('/user', create);
route.get('/users', getAll);

module.exports = route;
