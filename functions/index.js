const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")('sk_test_51IvFXDSIhaay1G0l1BAUoQYLP3MS779tggaVOtMYhC4fb2N7PdodblxEBRAg29iJAjqw58wOtssjOrNvnGUtGXD200VIDGm59p')

//API

//App config
const app = express()

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes

app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create',async(request, response) =>{
    const total = request.query.total;

    console.log('Payment Request Recieved BOOm!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, //subunits of the currency
        currency: "INR",
    });

    //OK created 
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

//Listen command
exports.api = functions.https.onRequest(app)


//Example endpoint
//http://localhost:5001/clone-ce2b9/us-central1/api