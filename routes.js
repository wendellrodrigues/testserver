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


//How to send to arduino: 

//You will likely have to find out how to set up a webserver on arduino that accepts these types of post requests. Check the link below for an example

//https://stackoverflow.com/questions/14944773/receiving-a-http-post-request-on-arduino




//Just exports the routes, so index.js can see it. 
//Dont worry about this
module.exports = router