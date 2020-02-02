require("dotenv").config();
const express = require("express");
const session = require("express-session");
const weatherCtrl = require('./weatherCtrl')
const request = require('request');
const Axios = require('axios')
const { SERVER_PORT, SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SECRET,
    cookie: { secure: false }
  })
);

// app.get('/api/weather', function(req, res) {
//    request.get({ url: "http://www.metaweather.com/api/location/2487956/"},  function(error, response, body) {
//            if (!error && response.statusCode == 200) {
//                res.json(body);
//               }
//           });
//   });

  app.get('/api/weather', async function(req, res) {
    try {
      return await Axios.get('http://www.metaweather.com/api/location/2487956/').then(result => res.status(200).send(result))
    } catch (error) {
      console.error(error)
    }
  })
  

app.listen(SERVER_PORT, () =>
  console.log(`listening on port ${SERVER_PORT}`)
);