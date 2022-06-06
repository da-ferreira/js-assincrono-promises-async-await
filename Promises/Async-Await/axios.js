/**
 * Pegando a lista de repositórios com Async/Await de um usuário do GitHub
 */

const axios = require('axios');

/* Utilizando somente o .then: */

// axios
// 	.get('https://api.github.com/users/da-ferreira')
// 	.then((response) => axios.get(response.data.repos_url))
// 	.then((repos) => console.log(repos.data))
// 	.catch((err) => console.log(err));

/* Utilizando somente o async / await: */

async function fetchRepos() {
	try {
		const user = await axios.get('https://api.github.com/users/da-ferreira');
		const repos = await axios.get(user.data.repos_url);

		console.log(repos.data.length);
	} catch (e) {
		console.log(e);
	}
}

fetchRepos();
