let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let port = 3000;
let product = require('./routes/product.route');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
let dbUrl = 'mongodb://localhost:27017/test';

app.get('/', (req, res) => {
    res.send('Welcome to NodeJs');
});

mongoose.connect(dbUrl, {useNewUrlParser: true}, function (error) {
    if(error){
        console.log('DB connection: ', error);
    }else{
        console.log('Mongodb is connected');
    }
})

app.use('/products', product);

app.listen(port, (error, res) => {
    if(error){
        console.log(error);
    }else{
        console.log('Server running on port ' + port);
    }
})