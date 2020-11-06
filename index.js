//Dependencies
const express         = require ('express');
const bodyParser      = require('body-parser');
const routes          = require('./routes')
const port            = 5000


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes PATH
app.use('/routes', routes);

app.listen(port, () => {
  console.log(`App is listening on PORT ${port}`)
});









