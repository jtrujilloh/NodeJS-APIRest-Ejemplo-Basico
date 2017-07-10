# NodeJS-ArquitecturaREST

Este proyecto representa una Arquitectura completamente funcional para aplicaciones de Servicios REST, y se basa en un paradigma diferente al común de servicios REST. no utiliza "enrutadores"...

URL a Ejecutar la API REST (Node) - Versión Actual: 0.0.1
http://localhost:9090/?p1=123&p2=Este es un texto

Editado en: 10-07-2017

Importante: Actualmente se está modificando para poder hacer uso de las "Operaciones" de ejemplo incluidas en la nueva versión, Ya no se usa enrutadores como normalmente se conoce, se utiliza la invocación por Operación, Nombre de Operación incluido en los parámetros enviados al servicio (Payload de Entrada, y con una única URL de direccionamiento).

URL al ejecutar la API REST (Node) - Próxima Versión: 1.0.0

- Method GET: 
	
	http://localhost:9090/?Header={Operacion:"ObtenerConfiguracionAPI"}&Body={Parametro1:0,Parametro2:true,Parametro3:""}

- Method POST: 

	http://localhost:9090/

Payload:
{
	Header={
		Operacion: "ObtenerConfiguracionAPI"
	},
	Body={
		Parametro1: 0,
		Parametro2: true,
		Parametro3: ""
	}
}
