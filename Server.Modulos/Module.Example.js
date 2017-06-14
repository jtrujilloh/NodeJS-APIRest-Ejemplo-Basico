var module_AppConfigPackage = require("./appconfig.json");
var module_ConfigPackage = require("./package.json");

//DEPENDENCIA: Controllers
var controllerExample = require("./Controllers/Controller.Example.js");

var ModuleExample = function(response){
	console.log("Instancia de Módulo: OK");
	this.response = response;
	this.Module_Config = loadModuleAppConfigPackage();
	this.Module_Params = loadModuleParamsPackage();
};

ModuleExample.prototype.operacion_ejemplo = function(request_method, parametro1, parametro2) {
	console.log("Inicio de Método del Módulo...");
	
	var strResultado;
	
	try {

		strResultado = controllerExample.operacion_ejemplo(this.response, this.Module_Config, this.Module_Params, parametro1, parametro2);

		if (strResultado != "ERROR") {
			//Hace algo internamente en caso de éxito
		} else {
			//Hace algo internamente en caso de error y retornamos el error a la capa de Servidor, ya que será el servidor que se encargue de responder a todos los errores en caso de desborde, así liberamos la instancia de la operación anterior.
			throw new Error("ERROR: " + strResultado);
		}

	} catch (ex) {
		//arrastra el error anterior a la capa de Servidor.
		console.log("[MODULE]: ERROR THROWED: " + ex.toString())
		throw new Error(ex.message);
	}
};

//IMPORTANTE: ésta línea siempre debe estar al último de tódos los métodos que expone 
//públicamente el módulo, los métodos privados se implementan debajo de esta línea.
module.exports = ModuleExample;

function loadModuleAppConfigPackage(){
	var str_JSON = JSON.stringify(module_AppConfigPackage);	
	return JSON.parse(str_JSON);
};

function loadModuleParamsPackage(){
	var str_JSON = JSON.stringify(module_ConfigPackage);
	return JSON.parse(str_JSON);
};