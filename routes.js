const express   = require('express');
const router    = express.Router();


//Route
router.route('/test')
  .post(
    testMessage //Runs funciton below
  )

//Function
async function testMessage(req, res) {

  //Send a json reponse 
  res.json(
    {
      name: "Some name",
      message: "This is a message",
      someOtherField: "Random words"
    }
  )
}


//Just exports the routes, so index.js can see it. 
//Dont worry about this
module.exports = router