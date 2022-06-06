/**
 * Maneira de se escrever promessas, mais elegante/diferente
 */

const promise = new Promise(function (resolve, reject) {
	return resolve('Ok');
});

async function start() {
	try {
		// Pega o resultado da espera da promesa
		const result = await promise;
		console.log(result); // 'Ok'
	} catch (err) {
		console.log(err);
	} finally {
		console.log('Sempre irei executar');
	}
}

start();

// promise
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err))
// 	.finally(() => console.log('Sempre irei executar'));
