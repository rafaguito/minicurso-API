"use strict" 
let pessoas = [{
	nome: "Luiz",
	idade: 20,
	cpf: 1,
	sobrenome: "Encomp",
}, {
	nome: "Yuri",
	idade: 21,
	cpf: 2,
	sobrenome: "Encomp",
}]

module.exports = (server) => {
	server.get("/pessoas", (request, response) =>{
		const cpf = request.query.cpf

		if(cpf) {
			const pessoasFiltradas = pessoas.filter(pessoa => pessoa.cpf == cpf)
			response.send(pessoasFiltradas)
		}else {
			response.send(pessoas)
		}

	})

	server.get("/pessoas/:pos", (request, response) =>{
		const posicao = request.params.pos
		if(posicao <= pessoas.length) {
			response.send(pessoas[posicao-1])
		}	else {
			response.send("Indice nao pode ser encontrado")
		}
	})

	server.post("/pessoas", (req, res) = {
		const pessoa = req.body.pessoa		
		if(pessoa) {
			const tamanho = pessoas.push(pessoa)
			res.send({
				tamanho: tamanho,
				novoVetor: pessoas,
			)}
		}else {
			res.send({
				error: "nenhuma pessoa enviada"
			)}
		}
	})

	
}
