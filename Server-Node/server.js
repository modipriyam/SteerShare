/**
 * Use 'express' framework for developing endpoints
 * Use MongoDB for the database
 * Use body-parser to interpret the requests
*/
const config = require('./app/config.json');
const cors = require("cors");




let express = require('express'),
              app = express(),
              port = process.env.PORT || 3000, 
              mongoose = require('mongoose'),
              bodyParser = require('body-parser');

              

//Connect to local MongoDB collection Assignment8
mongoose.connect(config.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

app.use(cors({origin: "*" }))


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/",(req,res)=>{
    res.send('Server started');
});

//const details = require();

app.post("/sendmail",(req,res)=>{
    console.log("request came");
    let user=req.body;
    sendMail(user,info=>{
        console.log('Mail has been sent');
        res.send(info);
    });

});

async function sendMail(user, callback){
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'youremailid', //ENTER YOUR EMAIL
            pass: 'yourpassword' //ENTER YOUR PASSWORD
        }

    });

    let mailOptions = {
        from: 'virajrajopadhye@gmail.com',
        to: user.email,
        subject: "RIDE BOOKING CONFIRMATION!",
        html: `<h3>Congratulations! Your Ride has been booked successfully</h3>`
    };

    let info = await transporter.sendMail(mailOptions);
    callback(info);
}




//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let nodemailer = require('nodemailer');


//Initialize app
let initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);