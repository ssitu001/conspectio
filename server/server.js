const express = require('express');
const app = express();
const http = require ('http').Server(app);
const path = require('path');
const conspectioServer = require('./conspectioServer');
conspectioServer(http);

app.get('/', (req,res) => {
	res.sendFile(path.resolve('client/index.html'));
});

app.use(express.static('client'));

http.listen(3000, function(){
	console.log('listening on 3000');
});

module.export = http;