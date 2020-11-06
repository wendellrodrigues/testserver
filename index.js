//Dependencies
const express         = require ('express');
const bodyParser      = require('body-parser');
const router          = express.Router()
const port            = 5000


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`)
});



/**
      Dont pay attention to the stuff above. The only pieces of code are the ones below
 */

//Route. 
router.route('/test')
  .post(
    testMessage //Runs funciton below
  )

//Function
async function testMessage(req, res) {
  res.json({name: "Test message"})
}









