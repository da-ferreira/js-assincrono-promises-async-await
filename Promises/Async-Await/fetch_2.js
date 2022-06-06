/**
 * Misturando Async/Await com .then
 */

async function start() {
	const user = await fetch('https://api.github.com/users/da-ferreira').then((response) => response.json());
	const userRepos = await fetch(user.repos_url).then((response) => response.json());

	console.log(userRepos);
}

start().catch((e) => console.log(e));
