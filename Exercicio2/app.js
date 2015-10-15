var app = angular.module('app', []);

app.factory('CarrinhoDeCompras', function(){

	var service = {};

	service.itens = [];

	return service;

});

app.controller('ComprasController', ['CarrinhoDeCompras', function(carrinho){

	this.itens = [

		{
			"descricao": "Iphone 6",
			"preco": 3000,
			"quantidade": 1
		},
		{
			"descricao": "IPad",
			"preco": 2500,
			"quantidade": 1	
		},
		{
			"descricao": "Capinhas",
			"preco": 15,
			"quantidade": 3
		}

	];

	this.adicionar = function(item){
		carrinho.itens.push(item);
	};

}]);

app.controller('CheckoutController', ['CarrinhoDeCompras', function(CarrinhoDeCompras){

	this.itens = CarrinhoDeCompras.itens;

	this.total = function(){

		var total=0;

		for (var i = this.itens.length - 1; i >= 0; i--) {
			total += this.itens[i].preco;
		};

		return total;

	};

}]);