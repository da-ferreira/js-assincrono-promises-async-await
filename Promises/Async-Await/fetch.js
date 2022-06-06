/**
 * Pegando a lista de repositórios com Async/Await de um usuário do GitHub
 */

// fetch('https://api.github.com/users/da-ferreira')
// 	.then((response) => response.json())
// 	.then((data) => fetch(data.repos_url))
// 	.then((repos) => repos.json())
// 	.then((data_repos) => console.log(data_repos))
// 	.catch((e) => console.log(e));

// Funções Async retornam um Promise (promessa)
async function start() {
	const response = await fetch('https://api.github.com/users/da-ferreira');
	const user = await response.json();
	const reposResponse = await fetch(user.repos_url);
	const repos = await reposResponse.json();

	console.log(repos);
}

// Capturando o erro aqui em vez de colocar o Try/Catch na função
start().catch((e) => console.log(e));
