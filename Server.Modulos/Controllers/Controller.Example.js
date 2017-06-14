//var otroModulo = require('otroModulo...');
//var otroModulo = require('otroModulo...');
//var otroModulo = require('otroModulo...');

exports.operacion_ejemplo = operacion_ejemplo;

function operacion_ejemplo(response, Module_Config, Module_Params, parametro1, parametro2){
	console.log("Inicio de M�todo del Controller...");
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
	response.end(); //Aqu� se finaliza la ejecuci�n del callback de respuesta, entregando la respuesta al Cliente de la forma m�s r�pida
	
	//A continuaci�n se pueden continuar haciendo operaciones o c�lculos en "BackGroud", siendo que el cliente ya recibi� la respuesta. esto aumenta la velocidad de respuestas al cliente...
	
	var suma = (2+3);
	//... m�s operaciones internas...
	
	strResultado = "OK";

	return strResultado;
};