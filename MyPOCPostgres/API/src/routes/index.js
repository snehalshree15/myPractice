
const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Test getAPI',
    version: '1.0.0',
  });
});

module.exports = router;