var app = angular.module('myApp', []);

app.controller('TemperaturaController', ['ConverterService', function(service) {

  this.celsius = 32.0;

  this.celsiusToKelvin = function(celsius) {
    return service.celsiusToKelvin(celsius);
  };

  this.celsiusToFahrenheit = function(celsius) {
    return service.celsiusToFahrenheit(celsius);
  };

}]);

app.factory('ConverterService', function(){

  var service = {};

  service.celsiusToKelvin = function(celsius) {
    answer = parseInt(celsius) + 273.5;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  service.celsiusToFahrenheit = function(celsius) {
    answer = parseInt(celsius) * 1.8 + 32;
    if (isNaN(answer)) {
      return 0;
    } else {
      return  answer;
    }
  };

  return service;

});
