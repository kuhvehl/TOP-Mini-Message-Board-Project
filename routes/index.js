var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messages', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/new', function(req, res, next) {
  const { user, text } = req.body;
  
  const newMessage = {
    user: user,
    text: text,
    added: new Date()
  };

  messages.push(newMessage);

  res.redirect('/');
});


module.exports = router;
