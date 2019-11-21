const functions = require('firebase-functions');
var admin = require('firebase-admin');
const express = require('express');
const app = express();

require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(process.env.SERVICE_ACCOUNT),
  databaseURL: 'https://socialape-921a1.firebaseio.com',
});

var config = {
  apiKey: process.env.API_KEY,
  authDomain: 'socialape-921a1.firebaseapp.com',
  databaseURL: 'https://socialape-921a1.firebaseio.com',
  projectId: 'socialape-921a1',
  storageBucket: 'socialape-921a1.appspot.com',
  messagingSenderId: '1019714195659',
  appId: '1:1019714195659:web:580bcb4e6447b52d42cb4e',
  measurementId: 'G-FLCMZQLVHM',
};

const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

app.get('/screams', (req, res) => {
  db.collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
    .then(data => {
      let screams = [];
      data.forEach(doc => {
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
        });
      });
      return res.json(screams);
    })
    .catch(err => console.error(err));
});

app.post('/scream', (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString(),
  };

  db.collection('screams')
    .add(newScream)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: 'something went wrong' });
      console.error(err);
    });
});

app.post('/signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  //TODO: validate data
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({ handle: 'this handle is already taken' });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
});

exports.api = functions.region('europe-west1').https.onRequest(app);
