module.exports = (server) => {
	server.get("/", (request, response) =>{
		console.log(request)
		response.send(200, {
			msg: "Bem-vindo ao Meu Site"	
		})
	})
}


