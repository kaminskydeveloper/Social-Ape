var admin = require('firebase-admin');
const config = require('../utility/config');

admin.initializeApp({
  //credential: admin.credential.applicationDefault(),
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT),
  storageBucket: config.storageBucket,
  databaseURL: 'https://socialape-921a1.firebaseio.com',
});

require('dotenv').config();

const db = admin.firestore();

module.exports = { admin, db };
