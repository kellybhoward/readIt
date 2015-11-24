//express
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var moment = require("moment");
moment().format();
//part of the login google oauth
var passport = require('passport');
var util = require('util');

var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('Z7Y6Qp0vhwLXBpAXbd5qOnAJflwVYww_xCWeJEAzzIULTKAFuEjPlnAfijYKi5O-', 'base64'),
  audience: 'SNHEs6HHm31Cbm6cUC3x8QGJqaf3FjPr'
});
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));
app.use('./server/config/routes.js', jwtCheck);

var server = app.listen(process.env.PORT || 8000, function(){
console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// var server = app.listen(8000, function(){
//     console.log('cool stuff on: 8000');
// });

// trying out google oauth with Passport



//set up sockets
var io = require('socket.io').listen(server);
var map = {};
var numOfUsers = 0;
io.sockets.on('connection', function(socket){
    console.log("The connection id is: " + socket.id);
    numOfUsers += 1;
    console.log("The total number of users is " + numOfUsers);
    var user = map['user'+numOfUsers] = {};
    socket.on('adding_user', function(data){
        user.name = data.name;
        user.socketID = socket.id;
        socket.emit('setting_socketUser', {name: user.name});
    })
    // how to listen for client side events
    //socket.on('event listener name', function(){})

    //how to respond to client side events
    //socket.emit('event name for client', {response: info}) --> goes to only socket that is connected
    //socket.broadcast.emit('event name for clients', {response: info}) --> goes to all other socket connections
    //io.emit('event name for all clients', {response: info}) --> goes to all socket connections

    //listening for the client disconnect event
    socket.on('disconnect', function(){
        console.log(socket.id + " is now disconnnected");
        numOfUsers -= 1;
        console.log("The total number of users is " + numOfUsers);
    })
})
