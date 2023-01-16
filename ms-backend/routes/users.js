const express = require("express");
const router = express.Router();




const controller = require("../controllers/users.controller");



router.route('/register').post( controller.register);
router.route('/login').post( controller.login);
router.route('/allmovies').get( controller.allmovies);
router.route('/allseries').get( controller.allseries);


module.exports = router;