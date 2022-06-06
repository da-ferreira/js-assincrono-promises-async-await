/**
 * Exemplo de Promise com uber
 */

const accept = false;
console.log('Pedir uber');

const promise = new Promise((resolve, reject) => {
	if (accept) {
		return resolve('Pedido aceito');
	}

	return reject('Pedido negado');
});

// Quando a promessa tiver algum resultado:
promise
	.then((result) => console.log(result))
	.catch((err) => console.log(err))
	.finally(() => console.log('Finalizada'));

console.log('Aguardando');
