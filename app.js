const express = require('express');
const expressGenerator = require('express-generator');
const app = express();
const mongoose = require('mongoose');

// Mongodb server setup
mongoose.connect('mongodb+srv://nirmit1198:<nirmit123>@postit.eaybc.mongodb.net/<postit>?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

// Server Starts
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

