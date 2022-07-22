var express = require('express');
var router = express.Router();





/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(result);
});


//POST Create a new users
let result = []

router.post('/', function(req, res, next) {
  let datas = []
  datas = req.body
  result.push(datas)  
});








module.exports = router;
