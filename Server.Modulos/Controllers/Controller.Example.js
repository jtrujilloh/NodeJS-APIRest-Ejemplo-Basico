//var otroModulo = require('otroModulo...');
//var otroModulo = require('otroModulo...');
//var otroModulo = require('otroModulo...');

exports.operacion_ejemplo = operacion_ejemplo;

function operacion_ejemplo(response, Module_Config, Module_Params, parametro1, parametro2){
	console.log("Inicio de Método del Controller...");
	var JSONResponse;
	var Resultado;
	var data = [];
	
	var strResultado;
	
	vCodigoHTTP = 200;
	
	JSONResponse = {
		"Parametros Recibidos": {
			"Parametro1": parametro1,
			"Parametro2": parametro2
		},
		"ModuleConfig": {
			"Config": Module_Config
		},
		"ModuleParams": {
			"Params": Module_Params
		}
	};
					
	response.writeHead(vCodigoHTTP, {'Content-Type': 'application/json; charset=utf-8'});
	response.write(JSON.stringify(JSONResponse));
	response.end(); //Aquí se finaliza la ejecución del callback de respuesta, entregando la respuesta al Cliente de la forma más rápida
	
	//A continuación se pueden continuar haciendo operaciones o cálculos en "BackGroud", siendo que el cliente ya recibió la respuesta. esto aumenta la velocidad de respuestas al cliente...
	
	var suma = (2+3);
	//... más operaciones internas...
	
	strResultado = "OK";

	return strResultado;
};