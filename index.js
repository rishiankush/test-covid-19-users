const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const user_path = require('./user_location.json');

const port = process.env.PORT;
const app = express();
const router = express.Router();

router.get('/', function (req, res) {
    
    res.status(200).send(user_path);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use('/user', router);

const listener = app.listen(port, () => {
    
    const address = listener.address();
    const host = address.address;
    const port = address.port;

    console.log(`App started on host: ${host}, port ${port}`); 
}).on('error', err => {
    console.error(`Could not start Exress server, code ${err}`);
    process.exit(1);
});