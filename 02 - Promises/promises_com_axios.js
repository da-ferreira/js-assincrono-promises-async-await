const axios = require('axios');

// O método get retorna uma promessa pendente
axios
	.get('https://api.github.com/users/da-ferreira')

	// Pega todos os repositórios desse usuário no GitHub e retorna a promessa para o
	// then abaixo. Como a função é arrow, o retorno é 'automático'
	.then((response) => axios.get(response.data.repos_url))

	.then((repos) => console.log(repos.data))
	.catch((err) => console.log(err));
