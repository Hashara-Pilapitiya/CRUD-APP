const express = require('express');

const { create } = require('../controller/userController.js');

//import { create } from "../controller/userController.js";

const route = express.Router();

route.post('/user', create);

module.exports = route;
