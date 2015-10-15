var app = angular.module('app', []);

app.factory('LogService', function(){

	var service = {};

	service.logs = [];

	service.log = function(nivel, mensagem){

		service.logs.push(

			{
				"nivel": nivel,
				"mensagem": mensagem	
			}

		);

		if(nivel == 0) {
			console.log(mensagem);
		} else if(nivel == 1){
			console.error(mensagem);
		}

	};

	return service;

});

app.controller('AppController', ['LogService', function(service){

	this.logs = service.logs;

	this.newLog = {};

	this.adicionar = function(){
		service.log(this.newLog.nivel, this.newLog.mensagem);
		this.newLog={};
	};

}]);