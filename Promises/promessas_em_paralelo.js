const axios = require('axios');

// Recebe um array de promessas, aonde todas serão executados paralelamente
Promise.all([
	axios.get('https://api.github.com/users/da-ferreira'),
	axios.get('https://api.github.com/users/da-ferreira/repos'),
	axios.get('https://api.github.com/users/da-ferreira/followers'),
])
	// Retorna uma arrays de respostas para as promessas acima
	.then((responses) => {
		console.log(responses[0].data.login);
		console.log(responses[1].data.length);
		console.log(responses[2].data.length);
	})

	// Se qualquer uma das promessas der erro, ele captura o erro e para todas as chamadas
	.catch((err) => console.log(err.message));
