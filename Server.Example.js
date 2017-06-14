var http = require("http");
var url = require("url");

var querystring = require("querystring");
var util = require("util");
var form = require("fs");

//var express = require("express");
//var mongoose = require("mongoose");
//var log4js = require("log4js");

//DEPENDENCIAS EXTERNAS: Modulos
var moduleExample = require("./Server.Modulos/Module.Example.js");

//http://localhost:9090/?p1=123&p2=Este%20es%20un%20texto
var Server = http.createServer(function(request, response) {
		
	var JSONResponse = "";
	console.log("-----------------------------------------------------");
	console.log("[SERVER][INVOCACION 'REST' INICIADA DESDE CLIENTE...]");
	var vFecha = new Date().toJSON(); //.slice(0,10)
	console.log("[START DATE]: " + vFecha);
	console.log("[REQUEST METHOD]: " + request.method + "");
			
	if (request.method === 'GET') 
	{
		var datosGet = request.url; 
		
		request.on('data', function (chunk) { 
			//console.log("DATOS RECIBIDOS: " + chunk);
		    datosGet += chunk; 
		});
		
		request.on('end', function() {
			
			if (!datosGet) { 
			    response.end(); 
				return; 
			} 
			
			try {
				console.log(request);
				
				//Aquí recuperas y parceas la data que proviene del Request o URL para este caso...
				var parametros = url.parse(request.url, true).query;
				var param_1 = parametros.p1; //123;
				var param_2 = parametros.p2; //"Valor de Ejemplo";
				
				console.log("Parametro 1: " + param_1);
				console.log("Parametro 2: " + param_2);
				
				ModuleExample = new moduleExample(response);
				JSONResponse = ModuleExample.operacion_ejemplo(request.method, param_1, param_2);
				
			} catch (ex) {
				//ERROR: GENERAL
				var vCodigoHTTP = 500;
				var vMensajeInterno = "ERROR";
				var vMensajeServicio = "El servidor no puede y no procesará la solicitud debido a un error grave (ERROR: " + ex.toString() + ")";
					
				JSONResponse = {"Mensaje":"Ha ocurrido un error al ejecutar la operación. Error: " + ex.toString()};
				
				response.writeHead(vCodigoHTTP, {'Content-Type': 'application/json; charset=utf-8'});
				response.write(JSONResponse);
				response.end();
				
				console.log("ERROR: " + ex.toString());
			}
			datosGet = '';
		});
		
		request.on('error', function(err) {
			console.log("****** ERROR EN REQUEST GET: " + err);
		});

		console.log("[SERVER][GET][INVOCACION 'REST' FINALIZADA]");
		console.log("-----------------------------------------------------");
		return;
	}
});
	
var server_app = Server.listen(9090, function () {
  var host = server_app.address().address
  var port = server_app.address().port
  console.log("Iniciando Servidor: ...");
  console.log("Servidor Iniciado: [OK]");
  console.log("API RESTfull is running and listening at http://%s:%s", "127.0.0.1", port);
  console.log("*****************************************************");
});
