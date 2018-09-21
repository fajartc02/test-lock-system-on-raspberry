var express = require('express');
var router = express.Router();
var db = require('../firebase')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('mausk bras');
  
  db.ref('user/').set({
    apayangmauluset: 'set'
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
