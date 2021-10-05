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

//funciones para tortas
router.get('/producto/:id', async(req, res) => {
  const curso = await
  admin.firestore().collection('tortas').doc(req.params.id).get();
  res.send(curso);
});

router.get('/productos', async(req, res) => {
  const cursos = await admin.firestore().collection('tortas').get();
  var lista = [];
  cursos.docs.forEach(doc => {
  lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});

router.post('/producto', async(req, res) => {
  const curso = await admin.firestore().collection('tortas')
  .add(req.body);
  res.send(curso);
});

router.put('/producto/:id', async(req, res) => {
  const curso = await
  admin.firestore().collection('tortas').doc(req.params.id)
  .update(req.body);
  res.send(curso);
});

router.delete('/producto/:id', async(req, res) => {
  const curso = await
  admin.firestore().collection('tortas').doc(req.params.id).delete();
  res.send(curso);
});


// Expose Express API as a single Cloud Function:
//URL: https://us-central1-dulce-kolibri.cloudfunctions.net/test
//Project Console: https://console.firebase.google.com/project/dulce-kolibri/overview
exports.test = functions.https.onRequest(router);