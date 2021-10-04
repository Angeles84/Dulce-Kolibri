const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors');

const router = express();
// Automatically allow cross-origin requests
router.use(cors({ origin: true }));

router.get('/', (req, res) => {
  res.send('OK')
})
// router.get('/curso/:id', async(req, res) => {
//   const curso = await
//   admin.firestore().collection('cursos').doc(req.params.id).get();
//   res.send(curso);
// });

// router.get('/cursos', async(req, res) => {
//   const cursos = await admin.firestore().collection('cursos').get();
//   var lista = [];
//   cursos.docs.forEach(doc => {
//   lista.push({ id: doc.id, data: doc.data() });
//   });
//   res.send(lista);
// });

// router.post('/cursos', async(req, res) => {
//   const curso = await admin.firestore().collection('cursos')
//   .add(req.body);
//   res.send(curso);
// });

// router.put('/cursos/:id', async(req, res) => {
//   const curso = await
//   admin.firestore().collection('cursos').doc(req.params.id)
//   .update(req.body);
//   res.send(curso);
// });

// router.delete('/cursos/:id', async(req, res) => {
//   const curso = await
//   admin.firestore().collection('cursos').doc(req.params.id).delete();
//   res.send(curso);
// });

// Expose Express API as a single Cloud Function:

exports.test = functions.https.onRequest(router);