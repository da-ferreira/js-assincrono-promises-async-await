const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2';

https.get(API, (res) => {
	console.log(res.statusCode, res.statusMessage);
});

console.log('conectando API'); // Será executado primeiro
