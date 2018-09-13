const restify = require('restify')

const server = restify.createServer()

const msgServidorOn = () => {
	console.log('Servidor rodando...')
}

server.listen(3000, msgServidorOn)




/* EXEMPLO DE DECLARAÇÃO DE FUNCOES EM JAVASCRIPT
const dobro = function(x) {
	console.log(`O dobro de é ${x*2}`)
}

const dobro1 = (x) => {
	console.log('O dobro é ' + x*2)
}

function dobro2(x) {
	console.log(x*2)
}
*/
