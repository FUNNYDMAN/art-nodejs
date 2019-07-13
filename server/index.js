const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT || '5000';
const host = process.env.API_HOST;
const userRoute = require('./routes/users');
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

app.use([
    userRoute
]);


app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`)
});


module.exports = app;