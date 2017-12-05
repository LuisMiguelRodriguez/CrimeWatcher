const express = require('express');


const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/email', (req, res) => {
  res.status(200).json({
    message: "Your user id is " + res.locals.userId
  });
});


module.exports = router;
