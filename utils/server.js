#!/usr/bin/env node
'use strict';

var fs = require('fs');
var mime = require('mime');

// Read file and response to clinet
function responseFile(filePath, response, callback, fileExt){
	fs.exists(filePath, function(exists){
		if(exists){
			var stream = fs.createReadStream(filePath);
			response.setHeader('Content-Type', mime.lookup(fileExt || filePath));
			callback(null, stream.pipe(response));
		}else{
			callback(new Error('Resource Not Found'));
		}
	});
}

module.exports.respFile = responseFile;