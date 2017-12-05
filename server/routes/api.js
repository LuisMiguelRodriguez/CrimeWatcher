const express = require('express');

var helper = require('sendgrid').mail;



const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/email', (req, res) => {
  res.status(200).json({
    message: res.locals.userId
  });
});

router.get('/email/:action', (req, res) => {
  var action = req.params.action;

  var from_email = new helper.Email('luis.the.coder@gmail.com');
  var to_email = new helper.Email('luis.the.coder@gmail.com');
  var subject = 'Hello World from the SendGrid Node.js Library!';
  var content = new helper.Content('text/plain', 'Hello from CrimeWatcher, Email!');
  var mail = new helper.Mail(from_email, subject, to_email, content);

  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    if(error){
      res.json({
        confirmation:'fail',
        message: error
      })

      return
    }
    res.json({
      confirmation:'success',
      response: response
    })

    return
    // console.log(response.statusCode);
    // console.log(response.body);
    // console.log(response.headers);
  });

});


module.exports = router;
