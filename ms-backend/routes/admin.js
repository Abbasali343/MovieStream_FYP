const express = require("express");
const router = express.Router();

const controller = require("../controllers/admin.controller");


router.route('/addmovie').post(controller.addmovie);
router.route('/addseries').post(controller.addseries);
router.route('/allmedia').get(controller.allmedia);
router.route('/onemedia').get(controller.onemedia);
router.route('/deletemedia').delete(controller.deletemedia);



module.exports = router;