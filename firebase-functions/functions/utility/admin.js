var admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT),
  databaseURL: 'https://socialape-921a1.firebaseio.com',
});

require('dotenv').config();

const db = admin.firestore();

module.exports = { admin, db };
