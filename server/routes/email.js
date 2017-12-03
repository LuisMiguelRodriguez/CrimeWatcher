const express = require('express');


const router = new express.Router();

router.get('/email', (req, res, next) => {
  res.json({
    confirmation: 'success',
    message: 'It worked'
  })
})



module.exports = router;
