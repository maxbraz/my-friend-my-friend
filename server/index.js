var express = require('express');
var bodyParser = require('body-parser');
var messages = require('../database-mysql');
var path = require('path');

var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/messages', (req, res) => {
  messages.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      res.send('get response line 18');
    }
  });
});

app.post('/question', (req, res) => {
  console.log(typeof req.body);
  // messages.selectAll((err, data) => {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  console.log('this is the post req.body: ', req.body);
  res.send('sending data back?');
});

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port ', port);
});