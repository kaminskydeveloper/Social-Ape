const functions = require('firebase-functions');

const express = require('express');
const app = express();

require('dotenv').config();

const FBAuth = require('./utility/fbAuth');

const { getAllScreams, postOneScream } = require('./handlers/screams');

const { signup, login } = require('./handlers/users');

//Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// Users routes
app.post('/signup', signup);
app.post('/login', login);

exports.api = functions.region('europe-west1').https.onRequest(app);
