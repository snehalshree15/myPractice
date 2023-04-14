/**
 * File: src/routes/index.js
 * Description: arquivo responsável pela chamada da Api da aplicação.
 * Data: 02/03/2020
 * Author Glaucia Lemos
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Test getAPI',
    version: '1.0.0',
  });
});

module.exports = router;