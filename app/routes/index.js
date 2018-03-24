var express = require('express');
var router = express.Router();
var path=require('path');
var count = 0;
/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile(path.join(__dirname,"../public/star.html"));
});
router.post('/',function (req,res) {
	// body...
	var u=req.body.username;
	var p=req.body.password;
	if(u=='zairza'&& p=='itssexx')
		count++;
		console.log(count);
	res.send('/profile');
});

router.get('/get_count',function(req,res){
	res.send(" "+count);
})

module.exports = router;
