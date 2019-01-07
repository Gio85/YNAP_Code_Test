const router = require('express').Router();
const conversions = require('../controllers/conversions');

router.route('/conversions')
  .post(conversions.create);

module.exports = router;
