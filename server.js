const express = require('express'),
app = express(),
port = process.env.PORT || 3000
routes = require('./routes.js');
mongoose = require('mongoose');
User = require('./models/UserModel.js');

mongoose.connect('mongodb://localhost/users_db');

routes(app);
app.listen(port);