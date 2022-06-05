/**
 * Axios é um cliente HTTP simples baseado em promessas para o navegador e para o node.js.
 * Tipo o Fetch API.
 */

// import axios from 'axios';

const axios = require('axios');

axios.get('https://api.github.com/users/da-ferreira').then((res) => {
	console.log(res.data);
});
